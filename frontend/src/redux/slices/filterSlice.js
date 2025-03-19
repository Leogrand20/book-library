import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTitle: (state, { payload }) => {
      state.title = payload
    },

    setFilterAuthor: (state, { payload }) => {
      state.author = payload
    },

    resetFilters: () => initialState,
  },
})

// export const setFilterTitle = filterSlice.actions.setFilterTitle
export const { setFilterTitle, setFilterAuthor, resetFilters } =
  filterSlice.actions

export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author

export default filterSlice.reducer
