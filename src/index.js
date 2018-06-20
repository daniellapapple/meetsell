import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import JavascriptTimeAgo from 'javascript-time-ago'

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/fontawesome/web-fonts-with-css/css/fontawesome-all.css'

import store from './store'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
