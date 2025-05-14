import { useAppDispatch, useAppSelector } from '../redux/store'
import { setTitleFilter } from '../redux/slices/filterSlice'
import { selectTitleFilter } from '../redux/selectors/filter-selectors'
import { UseTitle } from '../types/hooks'

export const useTitle = (): [string, UseTitle] => {
  const dispatch = useAppDispatch()
  const title = useAppSelector(selectTitleFilter)

  const setTitle: UseTitle = (e): void => {
    dispatch(setTitleFilter(e.target.value))
  }

  return [title, setTitle]
}
