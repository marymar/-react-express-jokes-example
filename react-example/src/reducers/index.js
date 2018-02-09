import { combineReducers } from 'redux';
import jokesReducer from './jokes.reducer';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  jokesState: jokesReducer,
  searchState: searchReducer
});

export default rootReducer;
