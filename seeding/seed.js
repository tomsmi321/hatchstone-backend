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
    console.log('attempting to seed users...');
    // client users
    const user1 = await User.create({
        email: 'alice@mail.com', 
        password: 'password'
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
        password: 'password',
        admin: true
    });

    const user7 = await User.create({
        email: 'admin-kyle@mail.com', 
        password: 'password',
        admin: true
    });

    console.log('users sucessfully seeded 👍');

    // ---create profiles---
    console.log('attempting to seed profiles...');
    // client profiles
    const profile1 = await Profile.create({
        firstName: 'alice',
        lastName: 'wilson',
        phone: '0476233988',
        address: '75 park road, park orchards, vic, 3114',
        appProgress: 0,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });
    profile1.userId = user1._id;
    await profile1.save()

    const profile2 = await Profile.create({
        firstName: 'Sarah',
        lastName: 'James',
        phone: '0456734244',
        address: '40 william street, mount waverley, vic, 3149',
        appProgress: 1,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });
    profile2.userId = user2._id;
    await profile2.save();

    const profile3 = await Profile.create({
        firstName: 'george',
        lastName: 'bray',
        phone: '0432009765',
        address: '35 wells road, Oakleigh, vic, 3166',
        appProgress: 0,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });
    profile3.userId = user3._id;
     await profile3.save();

    const profile4 = await Profile.create({
        firstName: 'matthew',
        lastName: 'smith',
        phone: '0476233652',
        address: 'pelham drive, vermont south, vic, 3133',
        appProgress: 0,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });
    profile4.userId = user4._id;
    await profile4.save();

    const profile5 = await Profile.create({
        firstName: 'david',
        lastName: 'johnson',
        phone: '0498362993',
        address: '10 murcdoch street, camberwell, vic, 3124',
        appProgress: 0,
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: '',
        documents: []
    });
    profile5.userId = user5._id;
     await profile5.save();

    // admin profiles
    const profile6 = await Profile.create({
        firstName: 'emma',
        lastName: 'miller',
        phone: '0498223665',
        profileImage: ''
    });
    profile6.userId = user6._id;
    await profile6.save()

    const profile7 = await Profile.create({
        firstName: 'cole',
        lastName: 'johnson',
        phone: '0409377455',
        profileImage: ''
    });
    profile7.userId = user7._id;
    await profile7.save()

    console.log('profiles sucessfully seeded 👍');

     // ---create conversations---
     console.log('attempting to seed conversations...');
    const conversation1 = await Conversation.create({
        participants: []
    });
    conversation1.participants.push(user1, user6);
    await conversation1.save();

    const conversation2 = await Conversation.create({
        participants: []
    });
    conversation2.participants.push(user2, user6);
    await conversation2.save();

    const conversation3 = await Conversation.create({
        participants: []
    });
    conversation3.participants.push(user3, user6);
    await conversation3.save();

    const conversation4 = await Conversation.create({
        participants: []
    });
    conversation4.participants.push(user4, user7);
    await conversation4.save();

    const conversation5 = await Conversation.create({
        participants: []
    });
    conversation5.participants.push(user5, user7);
    await conversation5.save();

    console.log('conversations sucessfully seeded 👍');
    
    // ---create messages---
    console.log('attempting to seed messages...');
    const message1 = await Message.create({
        content: 'test',
        dateCreated: Date.now()
    });
    message1.author = user1;
    message1.conversationId = conversation1._id;
    await message1.save();


    console.log('messages sucessfully seeded 👍');
}

   
module.exports = {
    seedDb,
    clearDb
};