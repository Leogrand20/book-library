import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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

    setOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },

    resetFilters: () => initialState,
  },
})

// export const setFilterTitle = filterSlice.actions.setFilterTitle
export const {
  setFilterTitle,
  setFilterAuthor,
  setOnlyFavorite,
  resetFilters,
} = filterSlice.actions

export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author
export const selectFilterFavorite = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
