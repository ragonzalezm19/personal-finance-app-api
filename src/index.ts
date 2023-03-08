import express from 'express'

const app = express()
app.use(express.json())

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT || 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong!!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!!`)
})
