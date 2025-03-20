import { createSlice } from '@reduxjs/toolkit'

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

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books

export default booksSlice.reducer
