// const users = require('./user-seed-data')
const mongoose = require('mongoose')
const User = require('../models/User')



profiles = [{
        firstName: "Alice",
        lastName: "Jones",
        phone: "2388394",
        address: "22 Heretaunga Square",
        appProgress: 0,
        approved: false,
        dateStarted: Date.now(),
        documents: [],
        investorType: 'individual'
    },
    {
        firstName: "George",
        lastName: "Jones",
        phone: "23232323",
        address: "22 Heretaunga Square",
        appProgress: 0,
        approved: false,
        dateStarted: Date.now(),
        documents: [],
        investorType: 'individual'
    },
    {
        firstName: "Sarah",
        lastName: "Jones",
        phone: "34343434343",
        address: "22 Heretaunga Square",
        appProgress: 0,
        approved: false,
        dateStarted: Date.now(),
        documents: [],
        investorType: 'individual'
    },
    {
        firstName: "Matthew",
        lastName: "Jones",
        phone: "1231231434343",
        address: "22 Heretaunga Square",
        appProgress: 0,
        approved: false,
        dateStarted: Date.now(),
        documents: [],
        investorType: 'individual'
    }
]

module.exports = profiles