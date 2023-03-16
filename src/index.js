require('dotenv').config()
require('./mongo')

const express = require('express')
const loginRoutes = require('./routes/login')
const testRoutes = require('./routes/test')
const signupRoutes = require('./routes/signup')

const app = express()

const { PORT } = process.env

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/signup', signupRoutes)
app.use('/login', loginRoutes)
app.use('/test', testRoutes)

// Ping
app.get('/ping', (req, res) => {
  console.log('someone pinged here!!')
  res.json({ message: 'pong' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
