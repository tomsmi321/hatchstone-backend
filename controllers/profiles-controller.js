//Dependencies
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk')
const upload = require('../middleware/multer-upload-middleware.js')

//Import Profile Model
const Profile = require('../models/Profile');

//AWS Credentials
let s3credentials = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY
});

// GET /profiles
const index = async (req, res, next) => {
    try {
        const profiles = await Profile.find();
        return  res.send(profiles);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /profiles/:id
const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findById(id);
        return res.send(profile);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// PUT /profiles/:id
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedProfile = await Profile.findByIdAndUpdate(id, req.body);
        return res.send(updatedProfile);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// DELETE /profiles/:id
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProfile = await Profile.findByIdAndDelete(id);
        res.send(deletedProfile);
    } catch(err) {
        console.log(err);
        res.status(500).send('an error occurred');
    }
}


//Desc:     Route for user to upload important documents to s3
//Route :  /profiles/:id/uploadDocument
//Access:   Private


const uploadDocument  =  async (req,res,next) => {
    try {
        //get Profile from params
        const { id } = req.params
         //get file from request
        const { file } = req.files

        const uniqueValue = 'harrisonmalone'
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
        const response = s3credentials.upload(fileParams, (err, data) => {
            if (err) {
                console.log(err)
                res.send('Upload to S3 failed')
            } else {
                console.log(data.Location)
                console.log("Uploaded to S3 Sucessfully")
                return data
            }
        })

        //push image url to database
        const updatedProfile = await Profile.findByIdAndUpdate(id,{ $push: { documents: response.location }})
        return res.send(updatedProfile)
    } catch (err) {
        console.log(err)
        res.status(500).send("Server Error")
    }
}


module.exports = {
    index, 
    show,
    update,
    destroy,
    uploadDocument,
    upload
}