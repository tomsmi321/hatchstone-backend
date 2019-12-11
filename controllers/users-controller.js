const express = require('express');
const router = express.Router();
const User = require('../models/User');


// note: a new user is created on the /auth/register route


// GET /users
const index = async (req, res, next) => {
    try {
        const users = await User.find();
        return  res.send(users);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /users/:id
const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.send(user);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// PUT /users/:id
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body);
        return res.send(updatedUser);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// DELETE /users/:id
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.send(deletedUser);
    } catch(err) {
        console.log(err);
        res.status(500).send('an error occurred');
    }
}

module.exports = {
    // create,
    index,
    show,
    update,
    destroy
}