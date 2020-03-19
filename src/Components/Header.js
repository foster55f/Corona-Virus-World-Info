import { filterCountryStats } from '../actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';





export const Header = ({history}) => {
  // state variable, initialized to 0
  const [message, setMessage]= useState( '' );
  const dispatch = useDispatch()
  var countries = useSelector(state => state.countryStats);



  const handleSearch = (event) => {
    history.push(`/searchcountrycontainer/`);
    const filteredCountries = countries.filter(country => {
      return country.country.toLowerCase().includes(message.toLowerCase()) || country.country.toLowerCase().includes(message.toLowerCase())
    })
    dispatch(filterCountryStats(filteredCountries))
  }

  return (
    <header>
      <div className='searchContainer'>
        <input
          className='search-input'
          type='text'
          placeholder='Search By Country'
          name='title'
          onChange={(event) => setMessage (event.target.value)}
        />
        <button onClick={() => handleSearch()} className="searchButton">Search</button>
                    
      </div>
    </header>
  )
}

export default Header