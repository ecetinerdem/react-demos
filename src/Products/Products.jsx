import React from 'react'
import './Products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

function Products() {
  return (
   <>
   <section className="card-container">
    <section className="card">
      <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
      alt="Shoe"
      className='card-img'
      />
      <div className="card-details">
        <h3 className="card-title">Nike Air Monarch IV</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" />
          <span className="total-reviews">(123 reviews)</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$200.00</del>$140.00
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
   </section>
   </>
  )
}

export default Products
Products