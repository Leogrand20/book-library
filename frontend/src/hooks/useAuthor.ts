import { useAppDispatch, useAppSelector } from '../redux/store'
import { setAuthorFilter } from '../redux/slices/filterSlice'
import { selectAuthorFilter } from '../redux/selectors/filter-selectors'
import { UseAuthor } from '../types/hooks'

export const useAuthor = (): [string, UseAuthor] => {
  const dispatch = useAppDispatch()
  const author = useAppSelector(selectAuthorFilter)

  const setAuthor: UseAuthor = (e): void => {
    dispatch(setAuthorFilter(e.target.value))
  }

  return [author, setAuthor]
}
