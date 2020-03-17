import { combineReducers } from 'redux';
import { stats } from './Stats';
import { countryStats } from './countryStats';


const rootReducer = combineReducers({
  stats, countryStats
});

export default rootReducer;