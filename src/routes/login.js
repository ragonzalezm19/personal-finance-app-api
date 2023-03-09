const express = require('express')
// const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
  console.log('login get')
  res.json({ message: 'login get' })
})

module.exports = router
