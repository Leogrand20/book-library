import { useDispatch } from 'react-redux'

import { resetFilters } from '../../redux/slices/filterSlice'

import { useTitle } from '../../hooks/useTitle'
import { useAuthor } from '../../hooks/useAuthor'
import { useOnlyFilter } from '../../hooks/useOnlyFilter'

import './Filter.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useTitle()
  const [author, setAuthor] = useAuthor()
  const [onlyFavorite, setOnlyFavorite] = useOnlyFilter()

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
              checked={onlyFavorite}
              onChange={setOnlyFavorite}
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
            value={author}
            onChange={setAuthor}
          />
        </div>

        <button type="button" onClick={() => dispatch(resetFilters())}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}
