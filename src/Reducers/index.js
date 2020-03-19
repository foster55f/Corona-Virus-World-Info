import { combineReducers } from 'redux';
import { stats } from './Stats';
import { countryStats } from './countryStats';
import { filteredCountries } from './filteredCountryStats';


const rootReducer = combineReducers({
  stats, countryStats, filteredCountries
});

export default rootReducer;