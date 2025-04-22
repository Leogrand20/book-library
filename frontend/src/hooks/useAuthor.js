import { useSelector, useDispatch } from 'react-redux'

import { setAuthorFilter } from '../redux/slices/filterSlice'
import { selectAuthorFilter } from '../redux/selectors/filter-selectors'

export const useAuthor = () => {
  const dispatch = useDispatch()
  const author = useSelector(selectAuthorFilter)

  const setAuthor = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  return [author, setAuthor]
}
