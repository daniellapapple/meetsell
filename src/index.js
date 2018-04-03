import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/fontawesome/web-fonts-with-css/css/fontawesome-all.css'

import store from './store'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
