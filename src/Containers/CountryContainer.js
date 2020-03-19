import CountryCard from '../Components/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { addCountryStats } from '../actions';
import { filterCountryStats } from '../actions';

import './CountryContainer.css';


export const CountryContainer = () => {
    const countries = useSelector(state => state.countryStats);
    const dispatch = useDispatch()
    useEffect(() => {
      async function fetchData() {
        return fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(data => {
          dispatch(addCountryStats(data))
          dispatch(filterCountryStats(data))
        })
      }
      fetchData();
    }, []); 

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
      

export default CountryContainer