import React from 'react';
import { filterCountryStats } from '../actions';
import { useDispatch } from 'react-redux';




export class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      filteredCountries: []
    }
  }
  
  handleSearch = (event) => {
        event.preventDefault()
        const filteredCountriesArray = this.props.games.filter(game => {
            return game.title.toLowerCase().includes(this.state.searchField.toLowerCase())|| game.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        dispatch(filterCountryStats(filteredCountriesArray))      
        this.setState({ searchField: '' })
    }

    
    render() {
        return (
            <header>
            <div className='searchContainer'>   
                <input
                    className ='search-input'
                    type='text'
                    placeholder='Search For Countries'
                    name='title'
                    onChange={event => this.setState({ searchField: event.target.value })}
                    value={this.state.searchField}
                />
                    <button onClick={this.handleSearch} className="searchButton">Search</button>
                    
            </div>
        </header>
        )
    }
}


export default (Header)