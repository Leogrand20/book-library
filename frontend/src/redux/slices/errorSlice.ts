import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ErrorSlice } from '../../types/error'

const initialState: ErrorSlice = {
  error: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,

  reducers: {
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    },

    clearError: (state) => {
      state.error = ''
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export default errorSlice.reducer
