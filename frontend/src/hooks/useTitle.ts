import { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setTitleFilter } from '../redux/slices/filterSlice'
import { selectTitleFilter } from '../redux/selectors/filter-selectors'

export const useTitle = () => {
  const dispatch = useAppDispatch()
  const title = useAppSelector(selectTitleFilter)

  const setTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return [title, setTitle]
}
