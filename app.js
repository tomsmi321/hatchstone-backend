// dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// create an instance of an express server
const app = new express();



//connect to
const mongoUri = process.env.MONGOURI

// db options
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const connectDb = async () => {
    try {
        await mongoose.connect(mongoUri, dbOptions);
        console.log('success: mongodb connected ✅');
    } catch(err) {
        console.log('error: mongodb not connected 😞');
    }
}

// connect to the db
connectDb()

// allow cors requests
app.use(cors());


// import routes
app.use(require('./routes'));


module.exports = app;