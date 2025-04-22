import express from 'express'
import cors from 'cors'

import booksData from './data/books.json' with { type: 'json' }

const app = express()
app.use(cors())

const getRandomBook = () => {
  const randomIndex = Math.floor(Math.random() * booksData.length)

  return booksData[randomIndex]
}

app.get('/random-book', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook())
  }, 2500)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
