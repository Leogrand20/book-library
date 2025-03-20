import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { createBook } from '../../utils/createBook'
import { setAddBook } from '../../redux/slices/booksSlice'
import data from '../../data/books.json'

import './BookForm.css'

export const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const newBook = createBook({
        title,
        author,
      })

      dispatch(setAddBook(newBook))

      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomBook = data[randomIndex]

    const randomBookWithId = createBook(randomBook)

    dispatch(setAddBook(randomBookWithId))
  }

  const handleAddRandomBookViaApi = async () => {
    try {
      const { data } = await axios('http://localhost:5000/random-book')

      if (data && data?.title && data?.author) {
        dispatch(setAddBook(createBook(data)))
      } else {
        alert('Book is not founded')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Add Book</button>
          <button type="button" onClick={handleAddRandomBook}>
            Add Random
          </button>
        </div>

        <div>
          <button type="button" onClick={handleAddRandomBookViaApi}>
            Add Random Book via API
          </button>
        </div>
      </form>
    </div>
  )
}
