import { useDispatch, useSelector } from 'react-redux'
import {
  setFilterTitle,
  selectTitleFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitileFilterChange = (e) => {
    dispatch(setFilterTitle(e.target.value))
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
            value={titleFilter}
            onChange={handleTitileFilterChange}
          />
        </div>

        <button type="button" onClick={handleRestFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}
