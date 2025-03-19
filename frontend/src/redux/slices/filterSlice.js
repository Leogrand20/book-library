import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTitle: (state, { payload }) => {
      state.title = payload
    },

    resetFilters: () => initialState,
  },
})

// export const setFilterTitle = filterSlice.actions.setFilterTitle
export const { setFilterTitle, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
