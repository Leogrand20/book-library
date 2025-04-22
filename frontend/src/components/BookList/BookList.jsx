import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'

import {
  setDeleteBook,
  setToggleFavoriteBook,
} from '../../redux/slices/booksSlice'
import { selectBooks } from '../../redux/selectors/books-selectors'

import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
} from '../../redux/selectors/filter-selectors'

import './BookList.css'

export const BookList = () => {
  const books = useSelector(selectBooks)
  const filterTitle = useSelector(selectTitleFilter)
  const filterAuthor = useSelector(selectAuthorFilter)
  const filterFavorite = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch()

  const handleDeleteBook = (bookId) => {
    dispatch(setDeleteBook(bookId))
  }

  const handleToggleFavoriteBook = (bookId) => {
    dispatch(setToggleFavoriteBook(bookId))
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

  const highlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      } else {
        return substring
      }
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {!books.length ? (
        <p>No available books</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map(({ title, author, id, isFavorite, source }, i) => (
            <li key={id}>
              <div className="book-info">
                {++i}. "{highlightMatch(title, filterTitle)}" <em>by</em>{' '}
                <strong>{highlightMatch(author, filterAuthor)}</strong> (
                {source})
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
