const User = require('../models/User');
// users = [
//     {
//         email: 'alice@mail.com',
//         password: 'password'
//     },
//     {
//         email: 'sarah@mail.com',
//         password: 'password'     
//     },
//     {
//         email: 'george@mail.com',
//         password: 'password'
//     },
//     {
//         email: 'matthew@mail.com',
//         password: 'password'
//     }
// ]

const seedDb = async () => {
    const user1 = await User.create({email: 'alice@mail.com', password: 'password'})
}


module.exports = seedDb;