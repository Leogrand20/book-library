import { useSelector, useDispatch } from 'react-redux'

import { setTitleFilter } from '../redux/slices/filterSlice'
import { selectTitleFilter } from '../redux/selectors/filter-selectors'

export const useTitle = () => {
  const dispatch = useDispatch()
  const title = useSelector(selectTitleFilter)

  const setTitle = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return [title, setTitle]
}
