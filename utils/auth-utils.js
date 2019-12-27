const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AWS = require('aws-sdk')

//AWS Credentials

// compare a plaintext password against a hash stored in the database
const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

// create a signed JWT token
const generateJwt = (user) => {
    const { _id, email, admin } = user;
    const payload = {
        id: _id,
        email: email,
        admin: admin
    }
    const privateKey = process.env.JWT_SECRET;
    const expiry = {expiresIn: '1hr'};
    return jwt.sign(payload, privateKey, expiry)
}

const loginUser = async (req, res, user, password) => {
    if(user) {
        const validPassword = await checkPassword(password, user.password);
        if(validPassword) {
            const token = generateJwt(user);
            console.log(req.user);
            return res.send({token});
        } else {
            res.status(403).send('incorrect details');
        }
    } else {
        return res.status(403).send('incorrect details');
    }
}

module.exports = {
    checkPassword,
    generateJwt,
    loginUser
}