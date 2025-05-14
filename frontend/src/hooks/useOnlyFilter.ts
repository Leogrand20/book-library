import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectOnlyFavoriteFilter } from '../redux/selectors/filter-selectors'
import { setOnlyFavoriteFilter } from '../redux/slices/filterSlice'

export const useOnlyFilter = () => {
  const dispatch = useAppDispatch()
  const onlyFavorite = useAppSelector(selectOnlyFavoriteFilter)

  const setOnlyFavorite = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  return [onlyFavorite, setOnlyFavorite]
}
