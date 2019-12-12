const mongoose = require('mongoose');

const clearDb = async () => {
    await mongoose.connection.db.dropCollection('users');
    await mongoose.connection.db.dropCollection('profiles');
    // await mongoose.connection.db.dropCollection('messages');
    // await mongoose.connection.db.dropCollection('conversations');
}

module.exports = {
    clearDb
}