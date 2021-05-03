import { combineReducers } from 'redux';
import bacteriaReducer from './bacteriaReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  bacteria: bacteriaReducer,
  user: userReducer,
});

export default reducers;
