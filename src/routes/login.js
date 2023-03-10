const express = require('express')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  // TODO: create method to validate credentials
  const token = jwt.sign(
    { email, password },
    config.SECRET,
    {
      expiresIn: '1m'
    }
  )

  res.json({ email, token })
})

module.exports = router
