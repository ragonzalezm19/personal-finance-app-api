import dotenv from 'dotenv'
import express from 'express'
import loginRoutes from './routes/login'
import testRoutes from './routes/test'

dotenv.config()

const app = express()
app.use(express.json())
app.use('/login', loginRoutes)
app.use('/test', testRoutes)

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT || 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
