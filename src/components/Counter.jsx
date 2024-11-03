import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <div>
        <h1 className='number'>{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={increment} className='increment'>+</button>
        <button onClick={decrement} className='decrement'>-</button>
      </div>
    </div>
  )
}

export default Counter
