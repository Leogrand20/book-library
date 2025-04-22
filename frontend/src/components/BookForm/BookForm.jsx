import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'

import { createBook } from '../../utils/createBook'
import { setAddBook, fetchBook } from '../../redux/slices/booksSlice'
import { selectIsLoading } from '../../redux/selectors/books-selectors'
import { setError } from '../../redux/slices/errorSlice'
import data from '../../data/books.json'

import './BookForm.css'

export const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const newBook = createBook(
        {
          title,
          author,
        },
        'manual',
      )

      dispatch(setAddBook(newBook))

      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('Lines title and author are required!'))
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomBook = data[randomIndex]

    const randomBookWithId = createBook(randomBook, 'random')

    dispatch(setAddBook(randomBookWithId))
  }

  const handleAddRandomBookViaApi = () => {
    dispatch(fetchBook('http://localhost:5000/random-book'))
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
          />
        </div>

        <div>
          <button type="submit">Add current book</button>
          <button type="button" onClick={handleAddRandomBook}>
            Add random book
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={handleAddRandomBookViaApi}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span>Loading book...</span>
                <FaSpinner className="spinner" />
              </>
            ) : (
              <span>Add random book via API</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
