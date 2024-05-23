import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div id='Contact' className="contact-form">
      <h2>CONTACT US</h2>
      <img src="./images/processDivider.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='form'>
      <form>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" id="subject" name="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact