import React from 'react';

const FilterSidebar = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="p-3 border-end" style={{ minWidth: '200px' }}>
      <h5>Filters</h5>
      <div>
        {categories.map((cat) => (
          <div key={cat} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id={cat}
              value={cat}
              checked={selectedCategory === cat}
              onChange={() => onCategoryChange(cat)}
            />
            <label className="form-check-label" htmlFor={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          </div>
        ))}
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="all"
            value=""
            checked={!selectedCategory}
            onChange={() => onCategoryChange(null)}
          />
          <label className="form-check-label" htmlFor="all">All</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
