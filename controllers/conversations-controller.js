// Dependencies

// Import Conversation model
const Conversation = require('../models/Conversation');
const User = require('../models/User');

// Controller methods
// /GET conversations
const index = async (req, res, next) => {
    try {
        const conversations = await Conversation.find()
        .populate({
            path: 'participants',
            model: User
        })
        return res.send(conversations);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

module.exports = {
    index
}