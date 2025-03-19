import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'

import {
  deleteBook,
  toggleFavoriteBook,
} from '../../redux/books/actionCreators'

import { selectTitleFilter } from '../../redux/slices/filterSlice'

import './BookList.css'

export const BookList = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const dispatch = useDispatch()

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  const handleToggleFavoriteBook = (bookId) => {
    dispatch(toggleFavoriteBook(bookId))
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(titleFilter.toLowerCase()),
  )

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {!books.length ? (
        <p>No available books</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map(({ title, author, id, isFavorite }, i) => (
            <li key={id}>
              <div className="book-info">
                {++i}. "{title}" <em>by</em> <strong>{author}</strong>
              </div>

              <div className="book-actions">
                <span onClick={() => handleToggleFavoriteBook(id)}>
                  {isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

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
