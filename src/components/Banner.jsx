import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <h1>STYLISH AXURE DESIGN</h1>
        <img src="./images/dividerMain.png" alt="" />
        <p>Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster than ever!</p>
        <button>Download</button>
      </div>
    </div>
  )
}

export default Banner