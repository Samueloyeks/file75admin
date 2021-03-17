import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './store';
import { Provider } from 'react-redux'

// const store = configureStore();



ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routes />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
