import { faBed, faPlane, faCar, faTaxi, faCalendarDay, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css';
import { format } from 'date-fns';

export const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className="header">
      <div className={type === 'list' ? 'header__container list__mode' : 'header__container'}>
        <div className="header__list">
          <div className="header__list__item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== 'list' && 
          <>
            <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
            <p className="header__descriptions">Get rewarded for your travels - unlock instant savings of 10% or more with a free Reservasi account</p>
            <button className="header__btn">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search__item">
                <FontAwesomeIcon icon={faBed} className="header__icon" />
                <input type="text" placeholder="Where are you going?" className="header__search__input" />
              </div>
              <div className="header__search__item">
                <FontAwesomeIcon icon={faCalendarDay} className="header__icon" />
                <span onClick={() => setOpenDate(!openDate)} className="header__search__text">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
              </div>
              <div className="header__search__item">
                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="header__search__text">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOptions && <div className="options">
                  <div className="option__item">
                    <span className="option__text">Adult</span>
                    <div className="option__counter">
                      <button className="option__counter__button" disabled={options.adult <= 0} onClick={() => handleOption('adult', 'd')}>-</button>
                      <span className="option__counter__number">{options.adult}</span>
                      <button className="option__counter__button" onClick={() => handleOption('adult', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="option__item">
                    <span className="option__text">Children</span>
                    <div className="option__counter">
                      <button className="option__counter__button" disabled={options.adult <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                      <span className="option__counter__number">{options.children}</span>
                      <button className="option__counter__button" onClick={() => handleOption('children', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="option__item">
                    <span className="option__text">Room</span>
                    <div className="option__counter">
                      <button className="option__counter__button" disabled={options.adult <= 0} onClick={() => handleOption('room', 'd')}>-</button>
                      <span className="option__counter__number">{options.room}</span>
                      <button className="option__counter__button" onClick={() => handleOption('room', 'i')}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="header__search__item">
                <button className="header__btn">Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}