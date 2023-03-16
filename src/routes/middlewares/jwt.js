const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const { SECRET } = process.env
  const token = req.headers.authorization?.split(' ')[1]

  if (token === undefined) {
    res.status(403).json({ errorMessage: 'Token is required' })
  } else {
    jwt.verify(token, SECRET, (err, user) => {
      if (err !== null) res.status(403).json({ error: { message: 'Invalid token' } })
      else {
        req.body.user = user
        next()
      }
    })
  }
}

module.exports = {
  validateToken
}
