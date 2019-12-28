// Dependencies
const AWS = require('aws-sdk')

// Import Profile and User Models
const Profile = require('../models/Profile');

// AWS Credentials
let s3credentials = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY
});

// POST /profiles
const create = async (req, res, next) => {
    try {
        // make sure user does not already have a profile
        const { userId } = req.body;
        const existingUserProfile = await Profile.findOne({ userId: userId });
        if(existingUserProfile) {
            throw 'user profile already exists';
        }
        const newProfile = await Profile.create(req.body);
        return res.send(newProfile);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}


// GET /profiles
const index = async (req, res, next) => {
    try {
        const profiles = await Profile.find()
        .populate('userId');
        return res.send(profiles);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /profiles/:id
// By profile id
// const show = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const profile = await Profile.findById(id)
//         .populate('userId');
//         return res.send(profile);
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send('an error occurred');
//     }
// }

// GET /profiles/:id
// By userId
const show = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const profile = await Profile.find({ userId: userId })
        .populate('userId');
        return res.send(profile);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}


// PUT /profiles/:id
// By profile id
// const update = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const updatedProfile = await Profile.findByIdAndUpdate(id, req.body);
//         return res.send(updatedProfile);
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send('an error occurred');
//     }
// }

// PUT /profiles/:id
// By userId
const update = async (req, res, next) => {
    try {
        const userId = req.params.id;
        console.log(req.body);
        const updatedProfile = await Profile.findOneAndUpdate({ userId: userId }, req.body);
        return res.send(updatedProfile);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// DELETE /profiles/:id
// By profile id
// const destroy = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const deletedProfile = await Profile.findByIdAndDelete(id);
//         return res.send(deletedProfile);
//     } catch(err) {
//         console.log(err);
//         res.status(500).send('an error occurred');
//     }
// }

// DELETE /profiles/:id
// By userId
const destroy = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deletedProfile = await Profile.findOneAndDelete(userId);
        return res.send(deletedProfile);
    } catch(err) {
        console.log(err);
        res.status(500).send('an error occurred');
    }
}

//Desc:     Route for user to upload important documents to s3
//Route :   /profiles/:id/uploadDocument
//Method:   POST
//Access:   Private
const uploadDocument = async (req,res,next) => {
    try {
        //get Profile from params
        const { id } = req.params
         //get file from request
        const { file } = req.files
        const uniqueValue = id
        //convert to encrypted string
        const name = Buffer.from(`${uniqueValue}${file[0].originalname}`).toString('base64')
        //s3 params
        let fileParams = {
            Bucket: process.env.BUCKET,
            Body: file[0].buffer,
            Key: name,
            ACL: 'public-read',
            ContentType: file[0].mimetype
        }
        // upload to s3 and return image url
        s3credentials.upload(fileParams, (err, data) => {
            if (err) {
                console.log(err)
                res.send('Upload to S3 failed')
            } else {
                const url = data.Location
                const profile =  Profile.findByIdAndUpdate(id,{ $push: { documents: url }})
                .then(profile => {
                    console.log(profile);
                })
            }
        })
        //send back profile
        const profile = await Profile.findById(id)
        return res.send(profile)
    } catch (err) {
        console.log(err)
        res.status(500).send("Server Error")
    }
}

//  NOTE: This route should be spliced into the update profile route as it is a part of the edit profile form
//  SUBNOTE: The following route will have to upload images to a different aws bucket than the documents. This will allow us to have different permissions set on the images;  documents should always be private, profile images can be public.

//Desc:     Route for user to upload profile image
//Route :   /profiles/:id/uploadProfileImage
//Method:   POST
//Access:   Private
const uploadProfileImage = async (req,res,next) => {
    try {
        //get Profile from params
        const { id } = req.params
         //get file from request
        const { file } = req.files
        const uniqueValue = id
        //convert to encrypted string
        const name = Buffer.from(`${uniqueValue}${file[0].originalname}`).toString('base64')
        
        //s3 params
        let fileParams = {
            Bucket: process.env.BUCKET,
            Body: file[0].buffer,
            Key: name,
            ACL: 'public-read',
            ContentType: file[0].mimetype
        }

        // upload to s3 and return image url
        s3credentials.upload(fileParams, (err, data) => {
            if (err) {
                console.log(err)
                res.send('Upload to S3 failed')
            } else {
                const url = data.Location
                const profile =  Profile.findByIdAndUpdate(id,  {$set: { profileImage: url } })
                .then(profile => {
                    console.log(profile);
                })
            }
        })
        //send back profile
        const profile = await Profile.findById(id)
        return res.send(profile)
    } catch (err) {
        console.log(err)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    create,
    index, 
    show,
    update,
    destroy,
    uploadDocument,
    uploadProfileImage
    
}