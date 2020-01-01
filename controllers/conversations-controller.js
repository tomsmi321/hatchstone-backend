// Dependencies

// Import Conversation model
const Conversation = require('../models/Conversation');
const User = require('../models/User');

// POST /conversations
// create a new conversation
const create = async (req, res, next) => {
    try {
        const { clientUser, adminUser } = req.body;
        // check to make sure conversation is between an admin and a client
        const clientUserObj = await User.findById(clientUser);
        const adminUserObj = await User.findById(adminUser);
        if(!(clientUserObj.admin === false && adminUserObj.admin === true)) {
            throw 'conversation must be between an admin and a client'
        }
        // search all existing conversations to check if a regular user already has a
        // conversation active with that particular admin user, if so return that conversation
        const allConversations = await Conversation.find();
        let existingConversation = null;
        allConversations.forEach((conversation) => {
            const convoParticipants = conversation.participants;
            if(convoParticipants.includes(adminUser) && convoParticipants.includes(clientUser)) {
                console.log('conversation already exists');
                existingConversation = conversation;
                return res.send(existingConversation);
            }
        })
        // otherwise create a new conversation
        if(!existingConversation) {
            const newConversation = await Conversation.create({
                participants: [clientUser, adminUser]
            });
            return res.send(newConversation);
        }
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /conversations
// return all conversations
const index = async (req, res, next) => {
    try {
        const conversations = await Conversation.find()
        .populate({
            path: 'participants',
            model: 'User'
        })
        return res.send(conversations);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /conversations/:id
// return a conversation by conversation id
const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const conversation = await Conversation.findById(id)
        .populate({
            path: 'participants',
            model: 'User'
        })
        return res.send(conversation);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// GET /conversations/findByUser/:id
// return all conversations for a given user id
const findByUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const allConversations = await Conversation.find()
        const userConversations = [];
        allConversations.forEach((conversation) => {
            if(conversation.participants.includes(userId)) {
                userConversations.push(conversation);
            }
        })
        return res.send(userConversations);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// PUT /conversations/:id
// update a conversation by conversation id
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { clientUser, adminUser } = req.body;
        console.log(adminUser, clientUser);
        const updatedConversation = await Conversation.findByIdAndUpdate(id, {
            participants: [clientUser, adminUser]
        });
        console.log(updatedConversation);
        return res.send(updatedConversation);
    } catch(err) {
        console.log(err);
        return res.status(500).send('an error occurred');
    }
}

// DELETE /conversations/:id
// delete a conversation by conversation id
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedConversation = await Conversation.findByIdAndDelete(id);
        return res.send(deletedConversation);
    } catch(err) {
        console.log(err);
        res.status(500).send('an error occurred');
    }
}


module.exports = {
    create,
    index,
    show,
    update,
    findByUser,
    destroy
}