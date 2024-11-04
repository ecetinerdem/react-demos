import React from 'react'

function Input({handleChange, value, title, name, color}) {
  return (
    <label className='sidebar-label-container'>
      <input type="radio" value="" name="test2" />
      <span className="chekmark"></span>All
  </label>
  )
}

export default Input