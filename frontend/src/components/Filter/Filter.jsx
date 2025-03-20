import { useDispatch, useSelector } from 'react-redux'

import {
  setFilterTitle,
  setFilterAuthor,
  setOnlyFavorite,
  selectFilterTitle,
  selectFilterAuthor,
  selectFilterFavorite,
  resetFilters,
} from '../../redux/slices/filterSlice'

import './Filter.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const filterTitle = useSelector(selectFilterTitle)
  const filterAuthor = useSelector(selectFilterAuthor)
  const filterFavorite = useSelector(selectFilterFavorite)

  const handleFilterTitleChange = (e) => {
    dispatch(setFilterTitle(e.target.value))
  }

  const handleFilterAuthorChange = (e) => {
    dispatch(setFilterAuthor(e.target.value))
  }

  const handleFilterOnlyFavoriteChange = () => {
    dispatch(setOnlyFavorite())
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
            value={filterTitle}
            onChange={handleFilterTitleChange}
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
