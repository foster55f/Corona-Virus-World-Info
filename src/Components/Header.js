import { filterCountryStats } from '../actions';
import React, { useState } from 'react';



export const Header = () => {
  // state variable, initialized to 0
  const [searchfield, setSearchField] = useState('');
  const [setFilteredCountries] = useState([]);


  const handleSearch = (event) => {
    console.log('hii')
    event.preventDefault()
    const filteredCountries = this.props.games.filter(game => {
      return game.title.toLowerCase().includes(this.state.searchField.toLowerCase()) || game.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    setFilteredCountries(filteredCountries)
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