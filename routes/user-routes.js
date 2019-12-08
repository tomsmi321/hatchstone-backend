const express = require('express');
const router = express.Router();
const { index } = require('../controllers/users-controller');

router.get('/', index);

module.exports = router;