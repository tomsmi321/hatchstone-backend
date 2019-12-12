const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Profile = require('../models/Profile')
const { clearDb } =require('../utils/seed-utils');
const users = require('../seed_data/user-seed-data');
const profiles = require('../seed_data/profile-seed-data')


router.get('/seed-db', async (req, res, next) => {
    try {
        await clearDb();
        console.log('Db successfully cleared 👍');
        users.forEach(async (user) => {
            await User.create(user);
        })

        profiles.forEach(async (profile) => {
            await Profile.create(profile)
        })

        res.send("Db successfully Seeded");
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
})

module.exports = router;