import React from 'react'

const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >{category}</button>
        )
      })}
      {/* <button className="filter-btn" onClick={() => filterItems('all')}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>
        breakfast
      </button> manual way */}
    </div>
  )
}

export default Category
