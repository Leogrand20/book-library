import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectOnlyFavoriteFilter } from '../redux/selectors/filter-selectors'
import { setOnlyFavoriteFilter } from '../redux/slices/filterSlice'
import { UseOnlyFavorite } from '../types/hooks'

export const useOnlyFilter = (): [boolean, UseOnlyFavorite] => {
  const dispatch = useAppDispatch()
  const onlyFavorite = useAppSelector(selectOnlyFavoriteFilter)

  const setOnlyFavorite: UseOnlyFavorite = (): void => {
    dispatch(setOnlyFavoriteFilter())
  }

  return [onlyFavorite, setOnlyFavorite]
}
