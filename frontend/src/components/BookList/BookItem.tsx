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
import { useAppDispatch, useAppSelector } from '../../redux/store'

import { filteredBooks } from '../../utils/filteredBooks'
import { highlightMatch } from '../../utils/highlightMatch'

export const BookItem = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(selectBooks)
  const filterTitle = useAppSelector(selectTitleFilter)
  const filterAuthor = useAppSelector(selectAuthorFilter)
  const filterFavorite = useAppSelector(selectOnlyFavoriteFilter)

  return (
    <>
      {!books.length ? (
        <p>No available books</p>
      ) : (
        <ul className="book-list">
          {filteredBooks(books, filterTitle, filterAuthor, filterFavorite).map(
            ({ title, author, id, isFavorite, source }, i) => (
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
            ),
          )}
        </ul>
      )}
    </>
  )
}
