const jwt = require('jsonwebtoken');
const User = require('../models/User');

// middleware for checking the use has a valid jwt token
const checkAuth = async (req, res, next) => {
    const { token } = req.headers;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    try {
        const { email } = data;
        const user = await User.findOne({email: email});
        // attach the token and the user to subsequent request objects
        req.user = user
        req.token = token
        console.log(req.user);
        console.log(req.token);
        next();
    } catch(err) {
        res.status(401).send('Not authorized to access this resource')
    }

}

module.exports = {
    checkAuth
};