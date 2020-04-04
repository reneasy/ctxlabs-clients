import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clients from './components/Clients.js';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
  <React.StrictMode>
    <Clients />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
