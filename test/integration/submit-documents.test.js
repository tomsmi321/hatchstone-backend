const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../../app')
require('dotenv').config()

const mongoUri = process.env.MONGOURI

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

beforeAll(() => {
  try {
    mongoose.connect(mongoUri, dbOptions)
    console.log('success: mongodb connected ✅')
  } catch (err) {
    console.log('error: mongodb not connected 😞')
  }
})

afterAll(() => {
  mongoose.connection.close()
})

// Test example. Test is passing. Test environment set up
describe('The client submits a document', () => {
  test('dummy test', async () => {
    expect(1).toEqual(1)
  })
})
