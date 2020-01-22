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

    const user8 = await User.create({
        email: 'admin-Jamie@mail.com',
        password: 'password',
        admin: true
    });

    ////

    const user9 = await User.create({
        email: 'Nick@mail.com',
        password: 'password'
    });

    const user10 = await User.create({
        email: 'Matt@mail.com',
        password: 'password'
    });

    const user11 = await User.create({
        email: 'Reece@mail.com',
        password: 'password'
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
        address: '37 Kubis Drive, Ringwood North VIC 3134',
        approved: true,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/U85CK2K.jpg?1',
        documents: [
            {
                name: 'Investor Verification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Investor-Identification.jpg',
                fileName: 'Investor-Identification.jpg'   
            },
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'
            }
        ]
    });

    const profile2 = await Profile.create({
        firstName: 'Sarah',
        lastName: 'James',
        phone: '0412348765',
        userId: user2._id,
        address: '40 william street, mount waverley, vic, 3149',
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/AF7pCun.jpg',
        documents: [
            {
                name: 'Investor Verification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Investor-Identification.jpg',
                fileName: 'Investor-Identification.jpg'   
            }
        ]
    });

    const profile3 = await Profile.create({
        firstName: 'george',
        lastName: 'bray',
        phone: '0432009765',
        userId: user3._id,
        address: '35 wells road, Oakleigh, vic, 3166',
        approved: true,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/tiUwAs7.jpg',
        documents: [
            {
                name: 'Company Verification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Company-Verification.jpg',
                fileName: 'Company-Verification.png'   
            },
            {
                name: 'Director and Beneficial Owner Identification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Director-and-Beneficial-Owner-Indentification.jpg',
                fileName: 'Owner-Identification.jpg'  
            },
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'  
            }
        ]
    });

    const profile4 = await Profile.create({
        firstName: 'matthew',
        lastName: 'smith',
        phone: '0412345678',
        userId: user4._id,
        address: 'pelham drive, vermont south, vic, 3133',
        approved: false,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: '',
        documents: [
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'  
            }
    ]
    });

    const profile5 = await Profile.create({
        firstName: 'david',
        lastName: 'johnson',
        phone: '',
        userId: user5._id,
        address: '10 murcdoch street, camberwell, vic, 3124',
        approved: false,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: '',
        documents: [
            {
                name: 'Company Verification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Company-Verification.jpg',
                fileName: 'Company-Verification.png'   
            },
            {
                name: 'Director and Beneficial Owner Identification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Director-and-Beneficial-Owner-Indentification.jpg',
                fileName: 'Owner-Identification.jpg'  
            },
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'  
            }
        ]
    });

    ////// admin profiles

    const profile6 = await Profile.create({
        firstName: 'emma',
        lastName: 'miller',
        phone: '0498223665',
        userId: user6._id,
        address: '123 Belfour Street, Toorak VIC 3142',
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/RlV8nhe.jpg',
        documents: []
    });

    const profile7 = await Profile.create({

        firstName: 'Kyle',
        lastName: 'johnson',
        phone: '0409377455',
        userId: user7._id,
        address: '12 Wallace St, Balwyn VIC 3103',
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/mySxm32.jpg',
        documents: []
    });

    const profile8 = await Profile.create({
        firstName: 'Jamie',
        lastName: 'Adams',
        phone: '0406775442',
        userId: user8._id,
        address: '17 Lawford St, Doncaster VIC 3108',
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/7CPI9oX.jpg',
        documents: []
    });

    ////////

    const profile9 = await Profile.create({
        firstName: 'Nick',
        lastName: 'Doe',
        phone: '0487654321',
        userId: user9._id,
        address: '',
        approved: false,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/4HgnGas.jpg',
        documents: [
        {
            name: 'Company Verification',
            url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Company-Verification.jpg',
            fileName: 'Company-Verification.png'   
        }
    ]
    });

    const profile10 = await Profile.create({
        firstName: 'Matt',
        lastName: 'Grey',
        phone: '0410191706',
        userId: user10._id,
        address: '125 Berringa Road, Park Orchards VIC 3114',
        approved: true,
        investorType: 'company',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/j1UPc19.jpg',
        documents: [
            {
                name: 'Company Verification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Company-Verification.jpg',
                fileName: 'Company-Verification.png'   
            },
            {
                name: 'Director and Beneficial Owner Identification',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Director-and-Beneficial-Owner-Indentification.jpg',
                fileName: 'Owner-Identification.jpg'  
            },
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'  
            }
        ]
    });

    const profile11 = await Profile.create({
        firstName: 'Reece',
        lastName: 'Jackson',
        phone: '',
        userId: user11._id,
        address: '1 John St, Lilydale VIC 3140',
        approved: false,
        investorType: 'individual',
        dateStarted: Date.now(),
        profileImage: 'https://i.imgur.com/yWptPx5.jpg',
        documents: [
            {
                name: 'Section 708 Wholesale Investor Certification.jpg',
                url: 'https://hatchstone-documents.s3-ap-southeast-2.amazonaws.com/Section708-Wholesale-Investor-Certification.jpg',
                fileName: 'Section708-Wholesale-Investor-Certification.jpg'
            },
        ]
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

    const conversation6 = await Conversation.create({
        participants: [user9, user8]
    });

    const conversation7 = await Conversation.create({
        participants: [user10, user8]
    });

    const conversation8 = await Conversation.create({
        participants: [user11, user8]
    });


    console.log('Conversations sucessfully seeded 👍');

    // ---create messages---
    console.log('Attempting to seed messages...');
    const message1Convo1 = await Message.create({
        author: user1,
        conversationId: conversation1._id,
        profileId: profile1._id,
        content: `Hi Emma, could you please clarify if I
        can used a foreign drivers for verification purposes?`,
        dateCreated: Date.now()
    });

    const message2Convo1 = await Message.create({
        author: user6,
        conversationId: conversation1._id,
        profileId: profile6._id,
        content: `Hi Alice, unfortunatley a foreign drivers license is not
        an acceptable form of identification. We do however accept a foreign
        passport.`,
        dateCreated: Date.now()
    });

    const message3Convo1 = await Message.create({
        author: user1,
        conversationId: conversation1._id,
        profileId: profile1._id,
        content: `Great thanks!`,
        dateCreated: Date.now()
    });

    ////////

    const message1Convo2 = await Message.create({
        author: user6,
        conversationId: conversation2._id,
        profileId: profile6._id,
        content: `Good afternoon Sarah. Thank you for uploading a copy of your passport.
        However, please note we require all documents to be certified. Could you
        please uplaod a certified copy at your earliest convenience.`,
        dateCreated: Date.now()
    });

    const message2Convo2 = await Message.create({
        author: user2,
        conversationId: conversation2._id,
        profileId: profile2._id,
        content: `Thanks, I will upload by the end of the week.`,
        dateCreated: Date.now()
    });

    /////////

    const message1Convo3 = await Message.create({
        author: user3,
        conversationId: conversation3._id,
        profileId: profile3._id,
        content: `Hi Emma, I just wanted to confirm if my accountant managed to get
        in contact with you yesterday?`,
        dateCreated: Date.now()
    });

    const message2Convo3 = await Message.create({
        author: user6,
        conversationId: conversation3._id,
        profileId: profile6._id,
        content: `Hi George. Yes I spoke to your accountant yesterday afternoon. He
        was able to confirm the details we needed. Looks like you just need to submit
        proof of wholesaler investor certification and you will be good to go.`,
        dateCreated: Date.now()
    });

    const message1Convo4 = await Message.create({
        author: user4,
        conversationId: conversation4._id,
        profileId: profile4._id,
        content: `Hi Kyle. It was great to chat to you on the phone the other day.
        Do these documents have to be certifed by a JP?`,
        dateCreated: Date.now()
    });

    const message2Convo4 = await Message.create({
        author: user7,
        conversationId: conversation4._id,
        profileId: profile7._id,
        content: `Good morning Matthew. The documents do have to be certifed, however
        it does not necessarily have to be by a JP. Please refer to this website for
        acceptable agents: https://www.vit.vic.edu.au/professional-responsibilities/for-teacher/nphc/list-of-certified-persons`,
        dateCreated: Date.now()
    });

    ////////

    const message1Convo5 = await Message.create({
        author: user7,
        conversationId: conversation5._id,
        profileId: profile7._id,
        content: `Hi David, I hope you are well today. Great meeting you at our investor
        information session last night. Thanks for the documents you have sent through so
        far. Could you kindly please upload a clearer copy of you driver license?`,
        dateCreated: Date.now()
    });

    const message2Convo5 = await Message.create({
        author: user5,
        conversationId: conversation5._id,
        profileId: profile5._id,
        content: `I will get my assistant take care of this and send through later today.`,
        dateCreated: Date.now()
    });

    const message3Convo5 = await Message.create({
        author: user5,
        conversationId: conversation5._id,
        profileId: profile5._id,
        content: `I will be stopping by your office tomorrow in anycase to ask a few more
        questions I had regarding one of your products`,
        dateCreated: Date.now()
    });

    const message4Convo5 = await Message.create({
        author: user7,
        conversationId: conversation5._id,
        profileId: profile7._id,
        content: `Sounds good David, I will be in the office till 3pm before heading out
        for some meetings, just let me know when you wanted to come in.`,
        dateCreated: Date.now()
    });

    ////////

    const message1Convo6 = await Message.create({
        author: user8,
        conversationId: conversation6._id,
        profileId: profile8._id,
        content: 'Hi Nick, Was good to finally catch up and meet. Thanks for the documents you have uploaded however could please re-upload all as they are quite blurry, sorry for the inconvenience',
        dateCreated: Date.now()
    });

    const message2Convo6 = await Message.create({
        author: user9,
        conversationId: conversation6._id,
        profileId: profile9._id,
        content: 'Hey Jamie, It was great to finally catch up, no worries that should not be a problem. I will get them to you within the week.',
        dateCreated: Date.now()
    });

    ////////

    const message1Convo7 = await Message.create({
        author: user10,
        conversationId: conversation7._id,
        profileId: profile10._id,
        content: 'Hi Jamie, was a bit unsure about which documents you were after after we last spoke, could you please let me know.',
        dateCreated: Date.now()
    });

    const message2Convo7 = await Message.create({
        author: user8,
        conversationId: conversation7._id,
        profileId: profile8._id,
        content: 'Hi Matt, no worries at all. The remaining document we require is just a photocopy of your drivers license. Thanks',
        dateCreated: Date.now()
    });

    /////////

    const message1Convo8 = await Message.create({
        author: user8,
        conversationId: conversation8._id,
        profileId: profile8._id,
        content: 'Hello Reece, I see you have not uploaded any documents yet. Could I please ask that you submit the Company Verification, Owner Identification and Wholesale Investor Certification as soon as possible. Thanks',
        dateCreated: Date.now()
    });

    const message2Convo8 = await Message.create({
        author: user11,
        conversationId: conversation8._id,
        profileId: profile11._id,
        content: 'Hi Jamie, that is correct I have not uploaded any docs yet, I will get my assistant to do that and hopefully have all available by end of next week.',
        dateCreated: Date.now()
    });

    console.log('Messages sucessfully seeded 👍');
}


module.exports = {
    seedDb,
    clearDb
};
