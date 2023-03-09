import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const validateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token === undefined) res.status(403).json({ errorMessage: 'Token is required' })
  else {
    const secret: jwt.Secret = process.env.SECRET ?? ''

    jwt.verify(token, secret, (err, user) => {
      if (err !== null) res.status(403).json({ errorMessage: 'Invalid token' })
      else {
        req.body.user = user
        next()
      }
    })
  }
}
