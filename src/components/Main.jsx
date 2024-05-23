import React from 'react'
import "./Main.css"

export const Main = () => {
  return (
    <header className="header">
      <div className="overlay">
        <div className="header-content">
          <div className="header-text">
            <img src="./images/MainLogo.png" alt="" />
            <h2>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean euismod bibendum laoreet. Proin gravida dolor sit amet 
              lacus accumsan et viverra justo commodo.</p>
            <button id="download-btn">Download</button>
          </div>
          <div className="header-form">
            <h3>Try Your <span>FREE</span> Trial Today</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button id='submit' type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
