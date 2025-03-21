import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'

const initialState = {
  books: [],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, { payload }) => {
      state.books.push(payload)
    },

    setDeleteBook: (state, { payload }) => {
      state.books = state.books.filter(({ id }) => id !== payload)
    },

    setToggleFavoriteBook: (state, { payload }) => {
      state.books = state.books.map((book) =>
        book.id === payload
          ? { ...book, isFavorite: !book.isFavorite }
          : { ...book },
      )
    },

    resetFilters: () => initialState,
  },
})

export const thunkFunction = async (dispatch, getState) => {
  try {
    const { data } = await axios('http://localhost:5000/random-book')

    if (data && data?.title && data?.author) {
      dispatch(setAddBook(createBook(data, 'API')))
    } else {
      alert('Book is not founded')
    }
  } catch (error) {
    alert(error)
  }
}

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books

export default booksSlice.reducer
