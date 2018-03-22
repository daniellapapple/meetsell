import {
  combineReducers
} from 'redux'

import HeaderSearchReducer from './headerSearchReducer'
import HeaderLoginReducer from './headerLoginReducer'

export default combineReducers({
  HeaderSearchReducer,
  HeaderLoginReducer
})