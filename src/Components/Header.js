import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

export function Header({history}) {
    const cases = useSelector(state => state.stats.cases);
    const deaths = useSelector(state => state.stats.deaths);
    const recovered = useSelector(state => state.stats.recovered);

    const enterCountryInfo = () => {
      history.push(`/countrycontainer/`);
    }
  return (
      <div>   
          <h1>Corona Virus Stats WorldWide</h1>
          <h2>Cases: {cases}</h2>
          <h2>Deaths: {deaths}</h2>
      <h2>Recovered: {recovered}</h2>
      <button onClick={enterCountryInfo}>Click button to see individual Country Info</button>
    </div>
  );
}


export default withRouter(Header)