const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth-controller');
const { validateNewUser } = require('../middleware/validation-middleware/user-validation');


router.post('/register', validateNewUser, register);
router.post('/login', login);

module.exports = router;