import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTitle: (state, { payload }) => {
      return {
        ...state,
        title: payload,
      }
    },
  },
})

export default filterSlice.reducer

console.log(filterSlice.actions.setFilterTitle('test'))
