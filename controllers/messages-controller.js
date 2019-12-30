// Dependencies

// Import model
const Message = require('../models/Message');

// POST /messages
// create a new message
const create = async (req, res, next) => {
    try {
        const newMessage = await Message.create(req.body);
        return res.send(newMessage);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /messages
// return all messages
const index = async (req, res, next) => {
    try {
        const messages = await Message.find()
        .populate({ path: 'author', model: 'User' })
        return  res.send(messages);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /messages/:id
// return a message by message id
const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const message = await Message.findById(id)
        .populate({ path: 'author', model: 'User' })
        return res.send(message);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// GET /messages/findByAuth/:id
// return all messages by a given author id
const findByAuth = async (req, res, next) => {
    try {
        const author = req.params.id;
        const message = await Message.find({ author: author })
        .populate({ path: 'author', model: 'User' })
        return res.send(message);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// GET /messages/findByConversation/:id
// return all messages by a given author id
const findByConversation = async (req, res, next) => {
    try {
        const conversationId = req.params.id;
        const message = await Message.find({ conversationId: conversationId })
        .populate({ path: 'author', model: 'User' })
        return res.send(message);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// PUT /messages/:id
// update a message by message id
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedMessage = await Message.findByIdAndUpdate(id, req.body);
        return res.send(updatedMessage);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// DELETE /messages/:id
// delete a message by message id
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deletedMessage = await Message.findByIdAndDelete(id);
        return res.send(deletedMessage);
    } catch(err) {
        console.log(err);
        res.status(500).send('an error occurred');
    }
}


module.exports = {
    create,
    index,
    show,
    findByAuth,
    findByConversation,
    update,
    destroy
}