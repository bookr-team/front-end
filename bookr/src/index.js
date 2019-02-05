import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import rootReducer from './store/reducers';

import App from './App';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,  // root reducer checks for login by looking for user in localStorage
  composeEnhancers(applyMiddleware(thunk)) //, logger))
);
// console.log("index.js store: ", store.getState().isLoggingIn);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
