import React from 'react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav__container">
        <span className="logo">Reservasi</span>
        <div className="nav__items">
          <button className="nav__button">Register</button>
          <button className="nav__button">Login</button>
        </div>
      </div>
    </div>
  )
}

