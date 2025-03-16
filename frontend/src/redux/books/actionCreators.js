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

export { addBook, deleteBook }
