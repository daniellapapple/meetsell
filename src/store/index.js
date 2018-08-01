import { createStore, applyMiddleware } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from '../reducers'

const enhancer = applyMiddleware(thunk, logger);
const store = createStore(reducer, enhancer);

export default store;

// PERSIST ***

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, reducer)
// let enhancer = applyMiddleware(logger, thunk)
// let store = createStore(persistedReducer, enhancer)
// let persistor = persistStore(store)

// export { store, persistor };

// export default () => {
//   return { store, persistor }
// }

// export default store