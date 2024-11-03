import React from 'react'
import '../style/styleTestimonials.css'
import { useState } from 'react'

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
    }

  return (
    <div className='testimonials'>
        <div className="testimonial-quote">
            {testimonials[currentIndex].quote}
        </div>
        <div className="testimonial-author">
            {testimonials[currentIndex].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}
