const { config } = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const loginRoutes = require('./routes/login')
const testRoutes = require('./routes/test')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/login', loginRoutes)
app.use('/test', testRoutes)

// Ping
app.get('/ping', (req, res) => {
  console.log('someone pinged here!!')
  res.json({ message: 'pong' })
})

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
