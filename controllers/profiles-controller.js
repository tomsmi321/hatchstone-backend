const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

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

module.exports = {
    index, 
    show,
    update,
    destroy
}