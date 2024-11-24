import express from 'express'
import cors from 'cors'
import prisma from '@repo/db/client'

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())

app.use('/api', routes)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500).json({ message: "internal server error" })
})

const gracefulShutdown = async () => {
  await prisma.$disconnect()
  process.exit()
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
})
