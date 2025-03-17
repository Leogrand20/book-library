import * as actionTypes from './actionTypes'

const initialState = []

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_BOOK: {
      return [...state, payload]
    }

    case actionTypes.DELETE_BOOK: {
      return state.filter(({ id }) => id !== payload.id)
    }

    case actionTypes.TOGGLE_FAVORITE_BOOK: {
      return state.map((book) =>
        book.id === payload.id
          ? { ...book, isFavorite: !book.isFavorite }
          : { ...book },
      )
    }

    default:
      return state
  }
}
