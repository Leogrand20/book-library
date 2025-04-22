import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'

import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
} from '../../redux/selectors/filter-selectors'

import { selectBooks } from '../../redux/selectors/books-selectors'

import {
  setDeleteBook,
  setToggleFavoriteBook,
} from '../../redux/slices/booksSlice'

export const BookItem = () => {
  const dispatch = useDispatch()
  const books = useSelector(selectBooks)
  const filterTitle = useSelector(selectTitleFilter)
  const filterAuthor = useSelector(selectAuthorFilter)
  const filterFavorite = useSelector(selectOnlyFavoriteFilter)

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
    <>
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
                <span onClick={() => dispatch(setToggleFavoriteBook(id))}>
                  {isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

                <button
                  type="button"
                  onClick={() => dispatch(setDeleteBook(id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
