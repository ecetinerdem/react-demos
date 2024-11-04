import React from 'react'
import './Colors.css'

function Colors() {
  return (
    <div>
        <label className='sidebar-label-container color title'>
        <input type="radio" value="" name="test3" />
        <span className="chekmark"></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test3" />
        <span className="chekmark"></span>Blue
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test3" />
        <span className="chekmark"></span>Red
      </label>
      
    </div>
)

}

export default Colors
Colors