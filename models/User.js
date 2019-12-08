// import mongoose and Schema
const { mongoose, Schema } = require('mongoose');

// create the user Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// create the user model
const User = mongoose.model('User', userSchema);

// export the user model
module.exports = User;