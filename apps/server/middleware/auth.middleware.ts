import type { NextFunction, Request, Response } from 'express'
import { verify, type JwtPayload } from 'jsonwebtoken'

interface AuthRequest extends Request {
  user?: JwtPayload | string
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'no token provided!' })
    }

    const jwtSecret = process.env.JWT_SECRET as string

    const decoded = verify(token, jwtSecret)
    req.user = decoded
    next()
  } catch (e) {
    return res.status(401).json({ message: 'invalid token', error: e })
  }
}
