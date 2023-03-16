const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./../models/User')

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, password } = req.body
  const { SECRET } = process.env

  const user = await User.findOne({ email })

  if (user === null) res.status(401).json({ error: { message: 'wrong email or password' } })

  const passwordIsCorrect = await bcrypt.compare(password, user.password)

  if (!passwordIsCorrect) res.status(401).json({ error: { message: 'wrong email or password' } })

  const userWithoutPassword = {
    id: user._id,
    name: user.name,
    email: user.email
  }

  const token = jwt.sign(
    userWithoutPassword,
    SECRET,
    {
      expiresIn: '1m'
    }
  )

  userWithoutPassword.token = token

  res.status(200).json(userWithoutPassword)
})

module.exports = router
