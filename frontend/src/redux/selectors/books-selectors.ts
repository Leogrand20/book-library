import { RootState } from '../store'

export const selectBooks = (state: RootState) => state.books.books
export const selectIsLoading = (state: RootState) => state.books.isLoading
