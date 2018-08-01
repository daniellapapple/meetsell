import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchReducer from './searchReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';

export default combineReducers({
  searchReducer,
  productReducer,
  userReducer,
  routing: routerReducer
});