const User = require('../models/User');
const { generateJwt, loginUser } = require('../utils/auth-utils');

// /POST register 
const register = async (req, res) => {
    const { email, password } = req.body
    if(email && password) {
        try {
            // check if there is an existing user
            const existingUser = await User.findOne({email: email});
            if(!existingUser) {
                // if no existing user create a new user, password is hashed in the model
                const newUser = await User.create({
                    email: email,
                    password: password
                })
                const token = await generateJwt(newUser);
                return res.send({token});
            } else {
                return res.status(403).send('user already exists')
            }
        } catch(err) {
            console.log(err);
            return res.status(404).send('an error eccured');
        }
    } else {
        return res.status(403).send('incorrect details');
    }
}

// /POST login 
const login = async (req, res) => {
    const { email, password } = req.body;
    if(email && password) {
        try {
            const user = await User.findOne({email: email});
            return await loginUser(req, res, user, password)
        } catch(err) {
            console.log(err);
            return res.status(404).send('an error occured');
        }   
    } else {
        return res.status(403).send('incorrect details');
    }  
}


module.exports = {
    register, 
    login
}