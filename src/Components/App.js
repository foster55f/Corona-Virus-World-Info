import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCoronaStats } from '../actions';
import { Header } from './Header';
import { withRouter } from 'react-router-dom';
import { Route} from 'react-router-dom';
import { CountryContainer } from '../Containers/CountryContainer';


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
        return <Header history={history}/>
      }}
    />
    <Route exact path='/countrycontainer' render={() => {
      return (
              <div >
                <CountryContainer /> 
            </div>
          )
      }}
    />
    </div>
  );
}


export default withRouter(App)
