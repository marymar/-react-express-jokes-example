import { combineReducers } from 'redux';
import fooReducer from './foo.reducers';

const rootReducer = combineReducers({
  foos: fooReducer
});

export default rootReducer;
