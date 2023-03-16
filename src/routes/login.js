const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  // TODO: create method to validate credentials
  const token = jwt.sign(
    { email, password },
    '',
    {
      expiresIn: '1m'
    }
  )

  res.json({ email, token })
})

module.exports = router
