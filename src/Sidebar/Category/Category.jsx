import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name='test' />
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleChange} value={'sneakers'} title={'Sneakers'} name={'test'} color={'#f1f1f1'} />
        <Input handleChange={handleChange} value={'flats'} title={'Flats'} name={'test'} color={'#f1f1f1'} />
        <Input handleChange={handleChange} value={'sandals'} title={'Sandals'} name={'test'} color={'#f1f1f1'} />
        <Input handleChange={handleChange} value={'heels'} title={'Heels'} name={'test'} color={'#f1f1f1'} />
      </div>
    </div>
  )
}

export default Category
