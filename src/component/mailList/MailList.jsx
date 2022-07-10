import React from 'react';
import './mailList.css';

export const MailList = () => {
  return (
    <div className="mail__list">
      <h1 className="mail__title">Save time, save money</h1>
      <span className="mail__description">Sign up and we'll send the best deals to you</span>
      <div className="mail__input__container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
