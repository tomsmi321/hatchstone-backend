// Dependencies
const AWS = require('aws-sdk')

// Import Profile and User Models
const Profile = require('../models/Profile')

// Import investorType models
const Individual = require('../models/investorTypes/Individual')
const Company = require('../models/investorTypes/Company')
const IndividualTrustee = require('../models/investorTypes/IndividualTrustee')
const CorporateTrustee = require('../models/investorTypes/CorporateTrustee')

// Import utils
const { getValidProfileAttributes } = require('../utils/profile-utils')

// AWS Credentials
let s3credentials = new AWS.S3({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
})

// POST /profiles
// create a new profile
const create = async (req, res, next) => {
  try {
    // ensure user does not already have a profile
    const { userId } = req.body
    console.log(userId)
    const existingUserProfile = await Profile.findOne({
      userId: userId,
    })
    if (existingUserProfile) {
      throw 'user profile already exists'
    }
    const newProfile = await Profile.create(req.body)
    res.send(newProfile)
  } catch (err) {
    console.log(err)
    return res.status(404).send('an error occurred')
  }
}

// GET /profiles
// return all profiles
const index = async (req, res, next) => {
  try {
    const profiles = await Profile.find().populate('userId')
    return res.send(profiles)
  } catch (err) {
    console.log(err)
    return res.status(404).send('an error occurred')
  }
}

// GET /profiles/:id
// return profile by profile id
const show = async (req, res, next) => {
  try {
    const { id } = req.params
    const profile = await Profile.findById(id).populate('userId')
    return res.send(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send('an error occurred')
  }
}

// GET /profiles/findByUser/:id
// return profile by user id
const findByUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const profile = await Profile.find({
      userId: userId,
    }).populate('userId')
    return res.send(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send('profile not found')
  }
}

// PUT /profiles/updateByUser/:id
// update profile by user id
// findOne and .save() is used here rather than findOneAndUpdate because we need to trigger the
// pre save hook to trigger the appProgress update
const updateByUser = async (req, res, next) => {
  try {
    console.log('in update by user')
    const id = req.params.id
    const definedAttributes = getValidProfileAttributes(req)
    // console.log(definedAttributes);
    const profile = await Profile.findOne({
      userId: id,
    })
    console.log(profile)
    for (let attribute in definedAttributes) {
      profile[attribute] = definedAttributes[attribute]
    }
    await profile.save()
    return res.send(profile)
  } catch (err) {
    console.log(err)
    return res.status(500).send('an error occurred')
  }
}

// PUT /profiles/:id
// update profile by profile id
// THIS WONT CURRENTLY WORK FOR UPDATING THE APP PROGRESS STATUS, USE UPDATE BY USER ID INSTEAD
const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedProfile = await Profile.findByIdAndUpdate(id, req.body)
    return res.send(updatedProfile)
  } catch (err) {
    console.log(err)
    return res.status(500).send('an error occurred')
  }
}

// DELETE /profiles/:id
// delete profile by profile id
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedProfile = await Profile.findByIdAndDelete(id)
    return res.send(deletedProfile)
  } catch (err) {
    console.log(err)
    res.status(500).send('an error occurred')
  }
}

// DELETE /profiles/destroyByUser/:id
// delete profile by user id
const destroyByUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const deletedProfile = await Profile.findOneAndDelete(userId)
    return res.send(deletedProfile)
  } catch (err) {
    console.log(err)
    res.status(500).send('an error occurred')
  }
}

//middleware for uploading to s3
const uploadDocument = async (req, res, next) => {
  try {
    //get document from req and convert to lowercase
    let documentString = req.body.document
    //get profile id from params
    const id = req.params.id
    //get file from request
    const { file } = req.files
    const fileName = file[0].originalname
    //s3 params
    let fileParams = {
      Bucket: process.env.BUCKET,
      Body: file[0].buffer,
      //this is where we set the name of the url
      Key: `${documentString}_${id}_${fileName}`,
      ACL: 'public-read',
      ContentType: file[0].mimetype,
    }
    // upload to s3 and return image url
    s3credentials.upload(fileParams, (err, data) => {
      if (err) {
        console.log(err)
        res.send('Upload to S3 failed')
      } else {
        const url = data.Location
        //create document object to be pushed into array
        const document = {
          name: documentString,
          url: url,
          fileName: fileName,
        }
        req.document = document
        next()
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }
}

//Desc:     Route for user to upload important documents to s3
//Route :   /profiles/:userId/uploadDocument
//Method:   POST
//Access:   Private
const pushDocumentToProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      userId: req.params.id,
    })
    profile.documents = [...profile.documents, req.document]
    console.log(profile)
    await profile.save()
    res.send(profile)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

//this route will be hit if the user wants to delete their uploaded image.
const deleteDocument = async (req, res, next) => {
  try {
    console.log(req.body)
    const { docFileName } = req.body

    const id = req.params.id

    const profile = await Profile.findOne({
      userId: id,
    })
    // console.log(profile.documents)
    const docs = profile.documents.toObject()
    const filteredDocs = docs.filter((doc) => {
      return doc.fileName !== docFileName
    })
    profile.documents = filteredDocs
    await profile.save()
    res.status(200).send(profile)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
}

const uploadProfileImage = async (req, res, next) => {
  try {
    //get Profile from params
    const { id } = req.params
    //get file from request
    const { file } = req.files
    const uniqueValue = id
    //convert to encrypted string
    const name = Buffer.from(`${uniqueValue}${file[0].originalname}`).toString(
      'base64',
    )

    //s3 params
    let fileParams = {
      Bucket: process.env.BUCKET,
      Body: file[0].buffer,
      Key: name,
      ACL: 'public-read',
      ContentType: file[0].mimetype,
    }

    // upload to s3 and return image url
    s3credentials.upload(fileParams, (err, data) => {
      if (err) {
        console.log(err)
        res.send('Upload to S3 failed')
      } else {
        const url = data.Location
        const profile = Profile.findByIdAndUpdate(id, {
          $set: {
            profileImage: url,
          },
        }).then((profile) => {
          console.log(profile)
        })
      }
    })
    //send back profile
    const profile = await Profile.findById(id)
    return res.send(profile)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }
}

// GET /profilesApproved
// returns an array of approved client profiles
const profilesApproved = async (req, res, next) => {
  try {
    const approvedProfiles = await Profile.find({
      approved: true,
    }).populate('userId')
    const approvedProfilesClients = approvedProfiles.map((approvedProfile) => {
      if (!approvedProfile.userId.admin) {
        return approvedProfile
      }
    })
    res.send(approvedProfilesClients)
  } catch (err) {
    console.log(err)
    return res.status(404).send('an error occurred')
  }
}

// GET /profilesOnboarding
// returns an array of onboarding client profiles (where approved attribute on profile is false)
const profilesOnboarding = async (req, res, next) => {
  try {
    const onboardingProfiles = await Profile.find({
      approved: false,
    }).populate('userId')
    const onboardingProfilesClients = []
    onboardingProfiles.forEach((onboardingProfile) => {
      if (onboardingProfile.userId.admin === false) {
        onboardingProfilesClients.push(onboardingProfile)
      }
    })
    res.send(onboardingProfilesClients)
  } catch (err) {
    console.log(err)
    return res.status(404).send('an error occurred')
  }
}

const profilesAdmin = async (req, res, nex) => {
    try {
        const profiles = await Profile.find()
            .populate('userId');
        const adminProfiles = profiles.filter((profile) => {
            return profile.userId.admin;
        })
        res.send(adminProfiles)
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occured')
    }
}

const profilesClient = async (req, res, nex) => {
    try {
        const profiles = await Profile.find()
            .populate('userId');
        const clientProfiles = profiles.filter((profile) => {
            return !profile.userId.admin;
        })
        res.send(clientProfiles)
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occured')
    }
}

module.exports = {
    create,
    index,
    show,
    findByUser,
    update,
    updateByUser,
    destroy,
    destroyByUser,
    uploadDocument,
    uploadProfileImage,
    profilesApproved,
    profilesOnboarding,
    deleteDocument,
    pushDocumentToProfile,
    profilesAdmin,
    profilesClient
}
