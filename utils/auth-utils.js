const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// generate a hash from password
const generateHash = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

// compare a plaintext password against a hash
const checkPassword = async (password, hash) => {
    return await bycrypt.compare(password, hash);
}

// create a new user
const generateNewUser = async (email, password) => {
    const hash = await generateHash(password);
    const newUser = await User.create({
        email: email,
        password: hash
    })
    return newUser;
}

// create a signed JWT token
const generateJwt = ({ email }) => {
    const payload = {email: email}
    const privateKey = process.env.JWT_SECRET;
    const expiry = {expiresIn: '1hr'};
    return jwt.sign(payload, privateKey, expiry)
}

module.exports = {
    checkPassword,
    generateNewUser,
    generateJwt
}