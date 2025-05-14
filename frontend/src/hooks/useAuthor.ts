import { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setAuthorFilter } from '../redux/slices/filterSlice'
import { selectAuthorFilter } from '../redux/selectors/filter-selectors'

export const useAuthor = () => {
  const dispatch = useAppDispatch()
  const author = useAppSelector(selectAuthorFilter)

  const setAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  return [author, setAuthor]
}
