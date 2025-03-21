import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'

const initialState = {
  books: [],
}

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const { data } = await axios('http://localhost:6000/random-book')

  return data
})

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

  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      if (payload.title && payload.author) {
        state.books.push(createBook(payload, 'API'))
      }
    })

    builder.addCase(fetchBook.rejected, (_, { error }) => {
      alert(error.message)
    })
  },
})

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books

export default booksSlice.reducer
