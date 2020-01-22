const express = require('express')
const router = express.Router()
const { seedDb, clearDb } = require('../seeding/seed')

router.get('/seed-db', async (req, res, next) => {
  try {
    await clearDb()
    console.log('Db successfully cleared 👍')

    await seedDb()
    console.log('Db seeding completed 👍')

    res.send('Db successfully Seeded')
  } catch (err) {
    console.log(err)
    return res.status(500).send('an error occurred')
  }
})

module.exports = router
