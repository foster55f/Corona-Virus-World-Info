import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CountryCard.css';


export const CountryCard = ({ country, cases, todayCases }) => {
  return (
    <article className='country-card'>
          <h2>Country: {country}</h2>
          <h2>Cases: {cases}</h2>
          <h2>Today's Cases: {todayCases}</h2>
    </article>
  )
}

export default withRouter(CountryCard);