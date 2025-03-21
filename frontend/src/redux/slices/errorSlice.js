import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createBook } from '../../utils/createBook'

const initialState = {
  error: '',
}

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const { data } = await axios('http://localhost:6000/random-book')

  return data
})

const errorSlice = createSlice({
  name: 'error',
  initialState,

  reducers: {
    setError: (state, { payload }) => {
      state.error = payload
    },

    clearError: (state) => {
      state.error = ''
    },
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

export const { setError, clearError } = errorSlice.actions

export const selectError = (state) => state.error.error

export default errorSlice.reducer
