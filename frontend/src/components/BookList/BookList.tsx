import { BookItem } from './BookItem'

import './BookList.css'

export const BookList = () => {
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      <BookItem />
    </div>
  )
}
