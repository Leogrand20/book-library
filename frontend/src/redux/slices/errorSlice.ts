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

export default errorSlice.reducer
