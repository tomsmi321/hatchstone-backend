const express = require('express');
const router = express.Router();

// middleware
router.use(express.json())

// routes
router.use('/users', require('./user-routes'));

module.exports = router;