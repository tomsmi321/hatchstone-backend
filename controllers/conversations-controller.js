// Dependencies

// Import Conversation model
const Conversation = require('../models/Conversation');
const User = require('../models/User');


// POST /conversations
const create = async (req, res, next) => {
    try {
        // search all existing conversations to check if a regular user already
        // has a conversation running with that particular admin user, if so return that conversation
        const { clientUser, adminUser } = req.body;
        // check to make sure conversation is between an admin and a client
        const clientUserObj = await User.findById(clientUser);
        console.log(clientUserObj.admin);
        const adminUserObj = await User.findById(adminUser);
        console.log(adminUserObj.admin);
        // console.log(!(clientUser.admin === false && adminUser.admin === true));
        if(!(clientUserObj.admin === false && adminUserObj.admin === true)) {
            throw 'conversation must be between an admin and a client'
        }
        const allConversations = await Conversation.find();
        allConversations.forEach((conversation) => {
            const convoParticipants = conversation.participants;
            if(convoParticipants.includes(adminUser) && convoParticipants.includes(clientUser)) {
                console.log('conversation already exists');
                return res.send(conversation);
            }
        })
        // otherwise create a new conversation
        const newConversation = await Conversation.create({
            participants: [clientUser, adminUser]
        });
        return res.send(newConversation);
    } catch(err) {
        console.log(err);
        return res.status(404).send('an error occurred');
    }
}

// GET /conversations
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
// By conversation id: returns a conversation by conversation id
// const show = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const conversation = await Conversation.findById(id)
//         // .populate('userId');
//         return res.send(conversation);
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send('an error occurred');
//     }
// }

// GET /conversation/:id
// By userId: returns all of a given user's conversations
const show = async (req, res, next) => {
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
// By conversation id: updates a conversation by conversation id
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
// By conversation id: deletes a conversation by conversation id
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
    destroy
}