import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="App">
      <header>
        <img src="./images/Logo.png" alt="" />
        <nav>
          <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
