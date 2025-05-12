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
    setTitleFilter: (state, { payload }) => {
      state.title = payload
    },

    setAuthorFilter: (state, { payload }) => {
      state.author = payload
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },

    resetFilters: () => initialState,
  },
})

// export const setTitleFilter = filterSlice.actions.setTitleFilter
export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
