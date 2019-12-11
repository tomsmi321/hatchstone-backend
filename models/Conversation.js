// import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    participants: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
    }
})

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;