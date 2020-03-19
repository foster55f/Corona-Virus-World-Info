import { filterCountryStats } from '../actions';
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';




export const Header = () => {
  // state variable, initialized to 0
  const [searchField, setSearchField] = useState('');
  const dispatch = useDispatch()
  var countries = useSelector(state => state.filteredCountries);



  const handleSearch = (event) => {

    const filteredCountries = countries.filter(country => {
      return country.country.toLowerCase().includes(event.toLowerCase()) || country.country.toLowerCase().includes(event.toLowerCase())
    })
    dispatch(filterCountryStats(filteredCountries))
  }

  return (
    <header>
      <div className='searchContainer'>
        <input
          className='search-input'
          type='text'
          placeholder='Search For Countries'
          name='title'
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button onClick={() => handleSearch()} className="searchButton">Search</button>
                    
      </div>
    </header>
  )
}

export default Header