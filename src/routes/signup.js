const { Router } = require('express')
const User = require('./../models/User')
const bcrypt = require('bcrypt')
const router = Router()

router.post('/', async (req, res) => {
  const { name, email, password } = req.body

  if (name === undefined || name === '') res.status(400).json({ error: { message: 'name is required.' } })
  if (email === undefined || email === '') res.status(400).json({ error: { message: 'email is required.' } })
  if (password === undefined || password === '') res.status(400).json({ error: { message: 'password is required.' } })

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name, email, password: passwordHash
  })

  const savedUser = await user.save()

  res.status(200).json(savedUser)
})

module.exports = router
