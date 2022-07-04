import React from 'react'
import Featured from '../../component/featured/Featured';
import { Header } from '../../component/header/Header';
import { Navbar } from '../../component/nav/Navbar';
import { Properties } from '../../component/properties/Properties';
import { PropertyList } from '../../component/propertyList/PropertyList';
import './home.css';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h1 className="home_title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home_title">Homes guests love</h1>
        <Properties />
      </div>
    </div>
  )
}
