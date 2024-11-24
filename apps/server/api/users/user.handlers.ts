import type { Request, Response } from "express";
import { getUserById } from "./user";

export const userHandlers = {
  async getUser(req: Request, res: Response) {
    try {

      const user = getUserById(req.user?.id)
      if (!user) {
        return res.status(404).json({ message: "user not found" })
      }

      res.json({ user: user })
    } catch (err) {
      console.error('get user general: ', err)
      res.status(500).json({ message: 'internal server error' })
    }
  }
}
