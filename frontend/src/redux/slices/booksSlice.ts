import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'
import { setError } from './errorSlice'

const initialState = {
  books: [],
  isLoading: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios(url)

      return data
    } catch (error) {
      dispatch(setError(error.message))

      return rejectWithValue(error)
    }
  },
)

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
  },

  extraReducers: ({ addCase }) => {
    addCase(fetchBook.pending, (state) => {
      state.isLoading = true
    })

    addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.isLoading = false

      if (payload.title && payload.author) {
        state.books.push(createBook(payload, 'API'))
      }
    })

    addCase(fetchBook.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export default booksSlice.reducer
