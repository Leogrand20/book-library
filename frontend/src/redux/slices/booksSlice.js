import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'
import { setError } from './errorSlice'

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  // async (url, thunkAPI) => {
  async (url, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios(url)

      return data
    } catch (error) {
      // thunkAPI.dispatch(setError(error.message))
      dispatch(setError(error.message))
      // для отклонения промиса - чтобы не попадать в блок extraReducers на проверку наличия полей title и author
      return rejectWithValue(error)
      //  либо:
      throw error
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
      state.isLoadingViaAPI = true
    })

    addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.isLoadingViaAPI = false

      if (payload.title && payload.author) {
        state.books.push(createBook(payload, 'API'))
      }
    })

    addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
})

export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
  booksSlice.actions

export const selectBooks = (state) => state.books.books
export const selectIsLoading = (state) => state.books.isLoadingViaAPI

export default booksSlice.reducer
