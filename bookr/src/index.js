import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers';

import App from './App';
import Landing from './Landing';
import HomeView from './views/HomeView/HomeView'

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const isLoggedIn = store.getState().isLoggedIn;
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={App} />
        { isLoggedIn && 
          <Route exact path="/loggedIn" component={HomeView} />
        }
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
