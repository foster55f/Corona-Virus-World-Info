import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function fetchData() {
      return fetch('https://coronavirus-19-api.herokuapp.com/all')
      .then(response => response.json())
      .then(data => console.log(data))
    }
    fetchData();
  }, []); 


  return (
    <div>
      <p>You clicked times</p>
      <button>
        Click me
      </button>
    </div>
  );
}




export default App;
