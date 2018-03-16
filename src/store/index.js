import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from '../reducers'

let enhancer = applyMiddleware(logger)
let store = createStore(reducer, enhancer)

export default store