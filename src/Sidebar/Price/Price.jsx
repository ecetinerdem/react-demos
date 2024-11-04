import React from 'react'
import './Price.css'

function Price() {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test2" />
        <span className="chekmark"></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test2" />
        <span className="chekmark"></span>$0.00 - $50.00
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test2" />
        <span className="chekmark"></span>$50.00 - $100.00
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test2" />
        <span className="chekmark"></span>$100.00 - $150.00
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" value="" name="test2" />
        <span className="chekmark"></span>$150.00 - $200.00
      </label>

    </div>
  )
}

export default Price