const express = require('express');
const router = express.Router();

const index = (req, res, next) => {
    try {
        res.send('index page')
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    index
};