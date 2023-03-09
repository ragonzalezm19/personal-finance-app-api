require('dotenv').config()

const express = require('express')
const loginRoutes = require('./routes/login')

const app = express()
app.use(express.json())
app.use('/login', loginRoutes)
// app.use('/test', testRoutes)

const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log({ env: process.env })
})
