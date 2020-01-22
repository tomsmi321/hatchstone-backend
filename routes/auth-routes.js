const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth-controller')
const {
  validateNewUser,
} = require('../middleware/validation-middleware/user-validation')
const { checkAuth } = require('../middleware/auth-middleware')

router.post('/register', validateNewUser, register)
router.post('/login', login)
router.get('/checkToken', checkAuth)

module.exports = router
