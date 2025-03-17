import * as actionTypes from './actionTypes'

const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  }
}

const deleteBook = (bookId) => {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: {
      id: bookId,
    },
  }
}

const toggleFavoriteBook = (bookId) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE_BOOK,
    payload: {
      id: bookId,
    },
  }
}

export { addBook, deleteBook, toggleFavoriteBook }
