const express = require('express')
const router = express.Router()

// middleware
router.use(express.json())

// routes
router.use('/users', require('./user-routes'))
router.use('/auth', require('./auth-routes'))
router.use('/profiles', require('./profile-routes'))
router.use('/seed', require('./seed-route'))
router.use('/conversations', require('./conversation-routes'))
router.use('/messages', require('./message-routes'))

module.exports = router
