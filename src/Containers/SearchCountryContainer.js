import CountryCard from '../Components/CountryCard';
import { useSelector } from 'react-redux';
import React from 'react';


export const SearchCountryContainer = ({history}) => {
    const countries = useSelector(state => state.filteredCountries);

    const countryStats = countries.map(country => {
      return (
              <CountryCard
                  country={country.country}
                  cases={country.cases}
                  todayCases={country.todayCases}
                  deaths={country.todayDeaths}
                  recovered={country.recovered}
                  active={country.active}
                  critical={country.critical}
            />
          )
        });
      
  return (
          <main className='country-container'>
            {countryStats}
          </main>
        )
      }
      

export default SearchCountryContainer