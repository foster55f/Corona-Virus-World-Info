import React from 'react';
import CountryCard from '../CountryCard';

export const CountryContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      async function fetchData() {
        return fetch('https://coronavirus-19-api.herokuapp.com/all')
        .then(response => response.json())
        .then(data => {
          dispatch(addCoronaStats(data))
        })
      }
      fetchData();
    }, []); 

  return (
    <div className='movie-container'>
      {movies.map(film => {
        return (
          <MovieCard
            key={film.id}
            id={film.id}
            title={film.title}
            poster={film.poster_path}
            averageRating={film.average_rating}
          />
        )
      })}
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)