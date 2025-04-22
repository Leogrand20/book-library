import { useDispatch, useSelector } from 'react-redux'

import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'

import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/selectors/filter-selectors'

import { useTitle } from '../../hooks/useTitle'

import './Filter.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const filterAuthor = useSelector(selectAuthorFilter)
  const filterFavorite = useSelector(selectOnlyFavoriteFilter)

  const [title, setTitle] = useTitle()

  const handleFilterAuthorChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleFilterOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  const handleRestFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Filter by title..."
            value={title}
            onChange={setTitle}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="favorite">
            <input
              type="checkbox"
              name="favorite"
              id="favorite"
              checked={filterFavorite}
              onChange={handleFilterOnlyFavoriteChange}
            />
            Only Favorite
          </label>
        </div>

        <div className="filter-group">
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Filter by author..."
            value={filterAuthor}
            onChange={handleFilterAuthorChange}
          />
        </div>

        <button type="button" onClick={handleRestFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}
