const User = require('../models/User');
const { checkPassword, generateNewUser, generateJwt } = require('../utils/auth-utils');


// /POST register 
const register = async (req, res, next) => {
    const { email, password } = req.body
    if(email && password) {
        try {
            // check if there is an existing user
            const existingUser = await User.findOne({email: email});
            if(!existingUser) {
                // if no existing user create a new user
                const user = await generateNewUser(email, password);
                const jwtToken = await generateJwt(user);
                return res.send({jwtToken});
            } else {
                return res.status(403).send('user already exists')
            }
        } catch(err) {
            console.log(err);
            res.status(404).send('an error eccured');
        }
    } else {
        return res.status(403).send('incorrect details');
    }
}

// /POST login 
const login = (req, res, next) => {
    const { email, password } = req.body;
    if(email && password) {
        try {
            const user = await findOne({email: email});
            res.send(user);
        } catch(err) {
            console.log(err);
            res.status(404).send('an error occured');
        }   
    } else {
        res.status(403).send('incorrect details');
    }
    
}


module.exports = {
    register, 
    login
}