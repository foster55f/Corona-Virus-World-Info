import { combineReducers } from 'redux';
import { stats } from './Stats';

const rootReducer = combineReducers({
  stats,
});

export default rootReducer;