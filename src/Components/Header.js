import React from 'react';
import './Header.css';
import { useSelector} from 'react-redux';

export function Header() {
    const cases = useSelector(state => state.stats.cases);
    const deaths = useSelector(state => state.stats.deaths);
    const recovered = useSelector(state => state.stats.recovered);

  return (
      <div>   
          <h1>Corona Virus Stats WorldWide</h1>
          <h2>Cases: {cases}</h2>
          <h2>Deaths: {deaths}</h2>
          <h2>Recovered: {recovered}</h2>
    </div>
  );
}




export default Header;