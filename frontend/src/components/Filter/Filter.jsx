import { useDispatch, useSelector } from 'react-redux'

import {
  setFilterTitle,
  setFilterAuthor,
  selectFilterTitle,
  selectFilterAuthor,
  resetFilters,
} from '../../redux/slices/filterSlice'

import './Filter.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const filterTitle = useSelector(selectFilterTitle)
  const filterAuthor = useSelector(selectFilterAuthor)

  const handleFilterTitleChange = (e) => {
    dispatch(setFilterTitle(e.target.value))
  }

  const handleFilterAuthorChange = (e) => {
    dispatch(setFilterAuthor(e.target.value))
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
