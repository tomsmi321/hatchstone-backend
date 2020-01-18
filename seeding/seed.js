// Dependencies
const mongoose = require('mongoose');

// import models
const User = require('../models/User');
const Profile = require('../models/Profile');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

const clearDb = async () => {
    await mongoose.connection.db.dropCollection('users');
    await mongoose.connection.db.dropCollection('profiles');
    await mongoose.connection.db.dropCollection('messages');
    await mongoose.connection.db.dropCollection('conversations');
}

const seedDb = async () => {
    // ---create users---
    console.log('Attempting to seed users...');
    // client users
    const user1 = await User.create({
        email: 'alice@mail.com', 
        password: 'Password1!'
    });

    const user2 = await User.create({
        email: 'sarah@mail.com', 
        password: 'password'
    });

    const user3 = await User.create({
        email: 'george@mail.com', 
        password: 'password'
    });

    const user4 = await User.create({
        email: 'matthew@mail.com', 
        password: 'password'
    });

    const user5 = await User.create({
        email: 'david@mail.com', 
        password: 'password'
    });

    // admin users
    const user6 = await User.create({
        email: 'admin-emma@mail.com', 
        password: 'Password1!',
        admin: true
    });

    const user7 = await User.create({
        email: 'admin-kyle@mail.com', 
        password: 'password',
        admin: true
    });

    console.log('Users sucessfully seeded 👍');

    // ---create profiles---
    console.log('Attempting to seed profiles...');
    // client profiles
    const profile1 = await Profile.create({
        firstName: 'alice',
        lastName: 'wilson',
        phone: '0476233988',
        userId: user1._id,
        address: '75 park road, park orchards, vic, 3114',
        // appProgress: 100,
        approved: true,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });

    const profile2 = await Profile.create({
        firstName: 'Sarah',
        lastName: 'James',
        phone: '0456734244',
        userId: user2._id,
        address: '40 william street, mount waverley, vic, 3149',
        appProgress: 100,
        approved: true,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });

    const profile3 = await Profile.create({
        firstName: 'george',
        lastName: 'bray',
        phone: '0432009765',
        userId: user3._id,
        address: '35 wells road, Oakleigh, vic, 3166',
        // appProgress: 20,
        approved: false,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: 'https://floridatax.com/wp-content/uploads/2015/03/LawFirmProfile6c-200x200.jpg',
        documents: [
            'Company verification, company_verification.doc',
            'Owner identification, id.png',
            'Wholesale investor certification, certification.doc'
        ]
    });

    const profile4 = await Profile.create({
        firstName: 'matthew',
        lastName: 'smith',
        phone: '0476233652',
        userId: user4._id,
        address: 'pelham drive, vermont south, vic, 3133',
        appProgress: 40,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });

    const profile5 = await Profile.create({
        firstName: 'david',
        lastName: 'johnson',
        phone: '0498362993',
        userId: user5._id,
        address: '10 murcdoch street, camberwell, vic, 3124',
        appProgress: 60,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });

    // admin profiles
    const profile6 = await Profile.create({
        firstName: 'emma',
        lastName: 'miller',
        phone: '0498223665',
        userId: user6._id,
        profileImage: ''
    });

    const profile7 = await Profile.create({
        firstName: 'cole',
        lastName: 'johnson',
        phone: '0409377455',
        userId: user7._id,
        profileImage: ''
    });

    console.log('Profiles sucessfully seeded 👍');

     // ---create conversations---
     console.log('Attempting to seed conversations...');
    const conversation1 = await Conversation.create({
        participants: [user1, user6]
    });

    const conversation2 = await Conversation.create({
        participants: [user2, user6]
    });

    const conversation3 = await Conversation.create({
        participants: [user3, user6]
    });

    const conversation4 = await Conversation.create({
        participants: [user4, user7]
    });

    const conversation5 = await Conversation.create({
        participants: [user5, user7]
    });

    console.log('Conversations sucessfully seeded 👍');
    
    // ---create messages---
    console.log('Attempting to seed messages...');
    const message1Convo1 = await Message.create({
        author: user1,
        conversationId: conversation1._id,
        content: `Hi Emma, could you please clarify if I 
        can used a foreign drivers for verification purposes?`,
        dateCreated: Date.now()
    });

    const message2Convo1 = await Message.create({
        author: user6,
        conversationId: conversation1._id,
        content: `Hi Alice, unfortunatley a foreign drivers license is not
        an acceptable form of identification. We do however accept a foreign 
        passport.`,
        dateCreated: Date.now()
    });

    const message3Convo1 = await Message.create({
        author: user1,
        conversationId: conversation1._id,
        content: `Great thanks!`,
        dateCreated: Date.now()
    });

    const message1Convo2 = await Message.create({
        author: user6,
        conversationId: conversation2._id,
        content: `Good afternoon Sarah. Thank you for uploading a copy of your passport.
        However, please note we require all documents to be certified. Could you 
        please uplaod a certified copy at your earliest convenience.`,
        dateCreated: Date.now()
    });

    const message2Convo2 = await Message.create({
        author: user2,
        conversationId: conversation2._id,
        content: `Thanks, I will upload by the end of the week.`,
        dateCreated: Date.now()
    });
    
    const message1Convo3 = await Message.create({
        author: user3,
        conversationId: conversation3._id,
        content: `Hi Emma, I just wanted to confirm if my accountant managed to get
        in contact with you yesterday?`,
        dateCreated: Date.now()
    });

    const message2Convo3 = await Message.create({
        author: user6,
        conversationId: conversation3._id,
        content: `Hi George. Yes I spoke to your accountant yesterday afternoon. He
        was able to confirm the details we needed. Looks like you just need to submit
        proof of wholesaler investor certification and you will be good to go.`,
        dateCreated: Date.now()
    });

    const message3Convo3 = await Message.create({
        author: user2,
        conversationId: conversation3._id,
        content: `Ok great, I should have that uploaded later this afternoon.`,
        dateCreated: Date.now()
    });

    const message1Convo4 = await Message.create({
        author: user4,
        conversationId: conversation4._id,
        content: `Hi Kyle. It was great to chat to you on the phone the other day.
        Do these documents have to be certifed by a JP?`,
        dateCreated: Date.now()
    });

    const message2Convo4 = await Message.create({
        author: user7,
        conversationId: conversation4._id,
        content: `Good morning Matthew. The documents do have to be certifed, however
        it does not necessarily have to be by a JP. Please refer to this website for
        acceptable agents: https://www.vit.vic.edu.au/professional-responsibilities/for-teacher/nphc/list-of-certified-persons`,
        dateCreated: Date.now()
    });

    const message1Convo5 = await Message.create({
        author: user7,
        conversationId: conversation5._id,
        content: `Hi David, I hope you are well today. Great meeting you at our investor
        information session last night. Thanks for the documents you have sent through so 
        far. Could you kindly please upload a clearer copy of you driver license?`,
        dateCreated: Date.now()
    });

    const message2Convo5 = await Message.create({
        author: user5,
        conversationId: conversation5._id,
        content: `I will get my assistant take care of this and send through later today.`,
        dateCreated: Date.now()
    });

    const message3Convo5 = await Message.create({
        author: user5,
        conversationId: conversation5._id,
        content: `I will be stopping by your office tomorrow in anycase to ask a few more
        questions I had regarding one of your products`,
        dateCreated: Date.now()
    });

    const message4Convo5 = await Message.create({
        author: user7,
        conversationId: conversation5._id,
        content: `Sounds good David, I will be in the office till 3pm before heading out 
        for some meetings, just let me know when you wanted to come in.`,
        dateCreated: Date.now()
    });

    console.log('Messages sucessfully seeded 👍');
}

   
module.exports = {
    seedDb,
    clearDb
};