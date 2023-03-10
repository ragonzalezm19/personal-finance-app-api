require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { validateToken } = require('./routes/middlewares/jwt')
const jwt = require('jsonwebtoken')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes

// Login
app.post('/login', (req, res) => {
  console.log({ env: process.env })
  const { email, password } = req.body

  // TODO: create method to validate credentials
  const token = jwt.sign(
    { email, password },
    process.env.SECRET,
    {
      expiresIn: '1m'
    }
  )

  res.json({ email, token })
})

// Test
app.get('/test', validateToken, (_req, res) => {
  res.json({ test: 'test' })
})

// Ping
app.get('/ping', (req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log({ env: process.env })
})
