const express = require('express')
const { validateToken } = require('./middlewares/jwt')

const router = express.Router()

router.get('/', validateToken, (req, res) => {
  res.json({ test: 'test' })
})

module.exports = router
