import React from 'react'
import './search.css'

export const Search = () => {
  return (
    <div className="search__item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="search__item__image" />
      <div className="search__item_description">
        <h1 className="search__item__title">Tower Street Apartments</h1>
        <span className="search__item__distance">500m from center</span>
        <span className="search__taxi">Free airport taxi</span>
        <span className="seacrh__item_subtitle">Studio with Air Conditioning</span>
        <span className="seacrh__item__features">Entire studio . 1 bathroom . 21m 1 full bed</span>
        <span className="search__item__cancel">Free cancellation</span>
        <span className="search__item__cancel__subtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="search__item_details">
        <div className="search__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search__item__detailtext">
          <span className="search__item__price">$123</span>
          <span className="search__item__tax">Includes taxes and fees</span>
          <button className="search__item__checkbutton">See availability</button>
        </div>
      </div>
    </div>
  )
}
