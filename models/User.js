// import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// create the user Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

// hash the password before saving to the db
userSchema.pre('save', function(next) {
    const user = this;
    const { password } = user;
    bcrypt.hash(password, 10, (err, hash) => {
        user.password = hash;
        next();
    });
})

// create the user model
const User = mongoose.model('User', userSchema);

// export the user model
module.exports = User;