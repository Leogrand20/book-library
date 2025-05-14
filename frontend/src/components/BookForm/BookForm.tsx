import { FormEvent, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

import { createBook } from '../../utils/createBook'
import { setAddBook, fetchBook } from '../../redux/slices/booksSlice'
import { selectIsLoading } from '../../redux/selectors/books-selectors'
import { setError } from '../../redux/slices/errorSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import booksData from '../../data/books.json'

import './BookForm.css'

export const BookForm = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoading = useAppSelector(selectIsLoading)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    if (randomBook) {
      const randomBookWithId = createBook(randomBook, 'random')

      dispatch(setAddBook(randomBookWithId))
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
            onClick={() => dispatch(fetchBook())}
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
