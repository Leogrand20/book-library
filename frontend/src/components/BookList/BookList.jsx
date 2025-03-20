import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'

import {
  deleteBook,
  toggleFavoriteBook,
} from '../../redux/books/actionCreators'

import {
  selectFilterTitle,
  selectFilterAuthor,
  selectFilterFavorite,
} from '../../redux/slices/filterSlice'

import './BookList.css'

export const BookList = () => {
  const books = useSelector((state) => state.books)
  const filterTitle = useSelector(selectFilterTitle)
  const filterAuthor = useSelector(selectFilterAuthor)
  const filterFavorite = useSelector(selectFilterFavorite)
  const dispatch = useDispatch()

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  const handleToggleFavoriteBook = (bookId) => {
    dispatch(toggleFavoriteBook(bookId))
  }

  const filteredBooks = books.filter((book) => {
    const titleMatches = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase())

    const authorMatches = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase())

    const favoriteMatches = filterFavorite ? book.isFavorite : book

    return titleMatches && authorMatches && favoriteMatches
  })

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
