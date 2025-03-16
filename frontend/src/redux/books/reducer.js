import * as actionTypes from './actionTypes'

const initialState = []

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_BOOK: {
      return [...state, payload]
    }

    default:
      return state
  }
}
