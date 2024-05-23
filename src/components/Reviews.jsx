import React from 'react'
import "./Reviews.css"

const testimonials = [
    {
      name: "Jeremy H.",
      title: "Manager",
      image: "./images/customer.png",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit."
    },
    {
      name: "John S.",
      title: "Freelancer",
      image: "./images/customer.png",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit."
    },
    {
      name: "Susan W.",
      title: "Photographer",
      image: "./images/customer.png",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit."
    }
];

const Reviews = () => {
  return (
    <div id='Reviews' className="testimonials">
      <h2>WHAT ARE CUSTOMERS ARE SAYING</h2>
      <img src="./images/processDivider.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <div className="testimonial-info">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews