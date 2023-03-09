import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/', (req, res) => {
  console.log({ env: process.env })
  const { email, password } = req.body
  const secret: jwt.Secret = process.env.SECRET ?? ''

  // TODO: create method to validate credentials
  const token = jwt.sign(
    { email, password },
    secret,
    {
      expiresIn: '1m'
    }
  )

  res.json({ email, token })
})

export default router
