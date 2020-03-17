import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCoronaStats } from '../actions';
import { Header } from './Header';
import { Route} from 'react-router-dom';
import { CountryContainer } from '../Containers/CountryContainer';


function App() {
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
    <Route path='/' render={() => {
      return <Header/>
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
    </div>
  );
}




export default App;
