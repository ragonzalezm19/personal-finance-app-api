import express from 'express'
import { validateToken } from './middlewares/jwt'

const router = express.Router()

router.get('/', validateToken, (_req, res) => {
  res.json({ test: 'test' })
})

export default router
