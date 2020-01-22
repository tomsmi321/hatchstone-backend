const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

//connect to
const mongoUri = process.env.MONGOURI

// db options
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, dbOptions)
    console.log('success: mongodb connected ✅')
  } catch (err) {
    console.log('error: mongodb not connected 😞')
  }
}

// connect to the db
connectDb()

// define a PORT
const PORT = process.env.PORT || 5000

// make the app run on the specified port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
