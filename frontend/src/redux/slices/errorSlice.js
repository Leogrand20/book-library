import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: '',
}

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
})

export const { setError, clearError } = errorSlice.actions

export const selectError = (state) => state.error.error

export default errorSlice.reducer
