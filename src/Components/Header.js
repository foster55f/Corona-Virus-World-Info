import { filterCountryStats } from '../actions';
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';




export const Header = () => {
  // state variable, initialized to 0
  const [searchfield, setSearchField] = useState('');
  const [setFilteredCountries] = useState([]);
  const dispatch = useDispatch()
  const countries = useSelector(state => state.filteredCountryStats);




  const handleSearch = (event) => {
    event.preventDefault()

    const filteredCountries = countries.filter(country => {
      return country.country.toLowerCase().includes(this.state.searchField.toLowerCase()) || country.country.toLowerCase().includes(this.state.searchField.toLowerCase())
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
          onChange={(event) => setSearchField(event.target.value)}
        />
        <button onClick={(e) => handleSearch(e)} className="searchButton">Search</button>
                    
      </div>
    </header>
  )
}

export default Header