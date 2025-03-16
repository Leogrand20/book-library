import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

export const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {!books.length ? (
        <p>No available books</p>
      ) : (
        <ul className="book-list">
          {books.map(({ title, author, id }, i) => (
            <li key={id}>
              <div className="book-info">
                {++i}. {title} <em>by</em> <strong>{author}</strong>
              </div>

              <div className="book-actions">
                <button type="button" onClick={() => handleDeleteBook(id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
