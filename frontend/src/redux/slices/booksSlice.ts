import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { createBook } from '../../utils/createBook'
import { setError } from './errorSlice'
import { BookSlice, IBookWithID } from '../../types/books'

const initialState: BookSlice = {
  books: [],
  isLoading: false,
}

export const fetchBook = createAsyncThunk<
  IBookWithID,
  undefined,
  {
    state: { books: BookSlice }
    rejectWithValue: string
  }
>(
  'books/fetchBook',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const config: AxiosRequestConfig = {
        method: 'GET',
        url: 'http://localhost:5000/random-book',
      }
      const { data }: AxiosResponse = await axios(config)

      return data
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))

        return rejectWithValue(error)
      }

      return rejectWithValue('Some error')
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().books

      if (isLoading) return false
    },
  },
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, { payload }: PayloadAction<IBookWithID>) => {
      state.books.push(payload)
    },

    setDeleteBook: (state, { payload }: PayloadAction<string>) => {
      state.books = state.books.filter(({ id }) => id !== payload)
    },

    setToggleFavoriteBook: (state, { payload }: PayloadAction<string>) => {
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
