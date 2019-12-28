// Dependencies

// Import Message model
const Message = require('../models/Message');

// Controller methods
// GET /messages
const index = async (req, res, next) => {
    try {
        const messages = await Message.find();
        return  res.send(messages);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

module.exports = {
    index
}