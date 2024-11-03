import '../style/styleAccordions.css'
import React, { useState } from 'react'


export const Accordions = ({ title, content }) => {
    const [active, setActive] = useState(false)
  return (
    <section className='accordion-card' key={Math.random()}>
        <div className='header' onClick={() => setActive(!active)}>
            <div>{title}</div>
            <p className='icon'>{active ? '-' : '+'}</p>
        </div>

        <div className="content">
            {active && <p className='card-info'>{content}</p>}
        </div>
    </section>
  )
}
