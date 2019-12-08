const express = require('express');
const router = express.Router();
const { index } = require('./user-routes');

// middleware
router.use(express.json())

// routes
router.get('/user', index);

module.exports = router;