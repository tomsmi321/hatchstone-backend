const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const { clearDb } =require('../utils/seed-utils');
const seedDb = require('../seed_data/seed');

router.get('/seed-db', async (req, res, next) => {
    try {
        await clearDb();
        console.log('Db successfully cleared 👍');
        seedDb();
        res.send();
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
})

module.exports = router;