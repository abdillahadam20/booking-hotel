import React, { useState } from 'react'
import './list.css'
import { Navbar } from '../../component/nav/Navbar'
import { Header } from '../../component/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns/esm'
import { DateRange } from 'react-date-range'
import { Search } from '../../component/search/Search'


export const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search__title">Search</h1>
            <div className="list__searct__item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list__searct__item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} />}
            </div>
            <div className="list__searct__item">
              <label>Options</label>
              <div className="list__options">
                <div className="list__option__item">
                  <span className="list__option__text">Min price <small>per night</small></span>
                  <input type="number" className="list__option__input" />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Max price <small>per night</small></span>
                  <input type="number" className="list__option__input" />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Adult</span>
                  <input type="number" className="list__option__input" min={0} placholder={options.adult} />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Children</span>
                  <input type="number" className="list__option__input" min={0} placholder={options.children} />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Room</span>
                  <input type="number" className="list__option__input" min={0} placholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list__result">
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
