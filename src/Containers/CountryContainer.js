import CountryCard from '../Components/CountryCard';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { addCountryStats } from '../actions';




export const CountryContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      async function fetchData() {
        return fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(data => {
          dispatch(addCountryStats(data))
        })
      }
      fetchData();
    }, []); 

  return (
    <div className='movie-container'>
      {/* {movies.map(film => {
        return (
          <MovieCard
            key={film.id}
            id={film.id}
            title={film.title}
            poster={film.poster_path}
            averageRating={film.average_rating} */}
          />
        )
      })}
    </div>
  )
}


export default CountryContainer