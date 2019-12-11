// import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String, 
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    },
    appProgress: {
        type: Number,
        default: 0
    },
    approved: {
        type: Boolean,
        default: false
    },
    investorType: {
        type: String,
        enum: ['individual', 'individual trustee', 'company', 'corporate trustee']
    },
    dateStarted: {
        type: Date,
        default: Date.now
    },
    profileImage: {
        type: String
    },
    documents: {
        type: [String]
    }
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile
