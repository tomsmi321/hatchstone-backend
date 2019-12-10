// dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// create an instance of an express server
const app = new express();

// db name
const db = 'hatchstone'

// db options
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDb = async (db, dbOptions) => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${db}`, dbOptions);
        console.log('success: mongodb connected ✅');
    } catch(err) {
        console.log('error: mongodb not connected 😞');
    }
}

// connect to the db
connectDb(db, dbOptions)

// allow cors requests
app.use(cors());

// import routes
app.use(require('./routes'));


module.exports = app;