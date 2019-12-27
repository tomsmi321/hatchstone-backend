const express = require('express');
const router = express.Router();
const { index } = require('../controllers/messages-controller');

// GET
router.get('/', index);

module.exports = router;