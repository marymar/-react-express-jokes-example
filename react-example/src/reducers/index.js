import { combineReducers } from 'redux';
import jokesReducer from './jokes.reducer';

const rootReducer = combineReducers({
  jokesState: jokesReducer
});

export default rootReducer;
