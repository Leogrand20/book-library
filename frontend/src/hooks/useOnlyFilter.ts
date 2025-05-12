import { useDispatch, useSelector } from 'react-redux'

import { selectOnlyFavoriteFilter } from '../redux/selectors/filter-selectors'
import { setOnlyFavoriteFilter } from '../redux/slices/filterSlice'

export const useOnlyFilter = () => {
  const dispatch = useDispatch()
  const onlyFavorite = useSelector(selectOnlyFavoriteFilter)

  const setOnlyFavorite = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  return [onlyFavorite, setOnlyFavorite]
}
