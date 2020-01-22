const jwt = require('jsonwebtoken')
const User = require('../models/User')

// middleware for checking the user has a valid jwt token
const checkAuth = async (req, res, next) => {
  const { authorization } = req.headers
  // Either localStorage or request headers is wrapping the token in ". We remove them otherwise JWT won't match
  const token = authorization.replace(/"/g, '')
  console.log('AUTH::::', token)
  const data = jwt.verify(token, process.env.JWT_SECRET)
  console.log('DATA::::', data)
  try {
    const { email } = data
    const user = await User.findOne({ email: email })
    // attach the token and the user to subsequent request objects
    req.user = user
    req.token = token
    console.log(req.user)
    console.log(req.token)
    console.log('DONE!')
    return res.status(200).send(user)
    // next();
  } catch (err) {
    return res.status(401).send('Not authorized to access this resource')
  }
}

module.exports = {
  checkAuth,
}
