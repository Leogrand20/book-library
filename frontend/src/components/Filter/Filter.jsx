import './Filter.css'

export const Filter = () => {
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Filter by title..."
        />
      </div>
    </div>
  )
}
