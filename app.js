// dependencies
const express = require('express')
const cors = require('cors')

// create an instance of an express server
const app = new express()

// allow cors requests
app.use(cors())

// import routes
app.use(require('./routes'))

module.exports = app
