require('dotenv').config()

const express = require('express')
const loginRoutes = require('./routes/login')

const app = express()
app.use(express.json())
app.use('/login-test', loginRoutes)
// app.use('/test', testRoutes)

const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.post('/login', (req, res) => {
  // console.log({ env: process.env })
  // const { email, password } = req.body

  // TODO: create method to validate credentials
  // const token = jwt.sign(
  //   { email, password },
  //   process.env.SECRET,
  //   {
  //     expiresIn: '1m'
  //   }
  // )

  // res.json({ email, token })
  console.log('login post')
  res.json({ message: 'login post' })
})

app.get('/login', (req, res) => {
  console.log('login get')
  res.json({ message: 'login get' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log({ env: process.env })
})
