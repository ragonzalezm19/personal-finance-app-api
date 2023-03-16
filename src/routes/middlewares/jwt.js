const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token === undefined) {
    res.status(403).json({ errorMessage: 'Token is required' })
  } else {
    jwt.verify(token, '', (err, user) => {
      if (err !== null) res.status(403).json({ errorMessage: 'Invalid token' })
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
