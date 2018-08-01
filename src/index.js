import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/fontawesome/web-fonts-with-css/css/fontawesome-all.css'

// import { store, persistor } from './store';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    {/* <PersistGate loading={ null } persistor={ persistor }> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>, document.getElementById('root'));
registerServiceWorker();
