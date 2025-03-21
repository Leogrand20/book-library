import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'
import { setError } from './errorSlice'

const initialState = {
  books: [],
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  // async (url, thunkAPI) => {
  async (url, { dispatch }) => {
    try {
      const { data } = await axios(url)

      return data
    } catch (error) {
      // thunkAPI.dispatch(setError(error.message))
      dispatch(setError(error.message))
      throw error // для отклонения промиса - чтобы не попадать в блок extraReducers на проверку наличия полей title и author
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

    resetFilters: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      if (payload.title && payload.author) {
        state.books.push(createBook(payload, 'API'))
      }
    })

    // builder.addCase(fetchBook.rejected, (_, { error }) => {
    //   alert(error.message)
    // })
  },
})

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books

export default booksSlice.reducer
