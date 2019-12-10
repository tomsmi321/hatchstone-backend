const jwt = require('jsonwebtoken');

// middleware for checking the use has a valid jwt token
const checkAuth = (req, res, next) => {
    console.log(req.headers);
    const { token } = req.headers;
    console.log(token);
    // console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(403).send('incorrect token');
        } else {
            req.user = decoded
            next()
        }
    })
}

module.exports = {
    checkAuth
};