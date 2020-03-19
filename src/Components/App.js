import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCoronaStats, filterCountryStats } from '../actions';
import { Home } from './Home';
import { Header } from './Header';
import { withRouter } from 'react-router-dom';
import { Route} from 'react-router-dom';
import { CountryContainer } from '../Containers/CountryContainer';
import { SearchCountryContainer } from '../Containers/SearchCountryContainer';



function App({history}) {
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
    <div className ='header'>
    <Route exact path='/' render={() => {
        return <Home history={history}/>
      }}
    />
    <Route exact path='/countrycontainer' render={() => {
      return (
            <div >
                <Header /> 
                <CountryContainer /> 
            </div>
          )
      }}
      />
          <Route exact path='/searchcountrycontainer' render={() => {
      return (
            <div >
                <Header /> 
          <SearchCountryContainer /> 
            </div>
          )
      }}
    />
    </div>
  );
}


export default withRouter(App)
