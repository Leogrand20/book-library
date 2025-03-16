import { useSelector } from 'react-redux'

import './BookList.css'

export const BookList = () => {
  const books = useSelector((state) => state.books)

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {!books.length ? (
        <p>No availables books</p>
      ) : (
        <ul className="book-list">
          {books.map(({ title, author, id }) => (
            <li key={id}>
              <div className="book-info">
                {title} <em>by</em> <strong>{author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
