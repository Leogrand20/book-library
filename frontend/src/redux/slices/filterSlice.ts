import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterSlice } from '../../types/filter'

const initialState: FilterSlice = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, { payload }: PayloadAction<string>) => {
      state.title = payload
    },

    setAuthorFilter: (state, { payload }: PayloadAction<string>) => {
      state.author = payload
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },

    resetFilters: () => initialState,
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
