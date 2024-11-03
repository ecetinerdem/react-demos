import React from 'react'
import './Category.css'

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" value="" name="test" />
          <span className="chekmark"></span>All
        </label>
      </div>
    </div>
  )
}

export default Category
