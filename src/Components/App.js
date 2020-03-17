import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCoronaStats } from '../actions';
import { Header } from './Header';


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
    <div className = 'header'>
     <Header/>
    </div>
  );
}




export default App;
