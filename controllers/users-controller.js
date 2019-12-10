const express = require('express');
const router = express.Router();
const User = require('../models/User');


// /GET return all users 
const index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch(err) {
        console.log(err);
        res.status(404).send('an error occured');
    }
}

module.exports = {
    index
}