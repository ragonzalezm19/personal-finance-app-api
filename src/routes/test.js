const express = require('express')
const { validateToken } = require('./middlewares/jwt')

const router = express.Router()

router.get('/', validateToken, (_req, res) => {
  res.json({ test: 'test' })
})

module.export = router
