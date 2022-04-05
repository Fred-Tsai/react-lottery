import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/meyerweb.css';
import './index.css';
import './assets/styles/img.css';
import './assets/styles/bg.css';
import './assets/styles/btn.css';
import './assets/styles/text.css';
import App from './App';
import store from './store/index.js';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
