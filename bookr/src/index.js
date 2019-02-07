import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import Button from '@material-ui/core/Button';

import rootReducer from './store/reducers';

import App from './App';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,  // root reducer checks for login by looking for user in localStorage
  composeEnhancers(applyMiddleware(thunk)) //, logger))
);
// console.log("index.js store: ", store.getState().isLoggingIn);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#53bdad' // teal
    },
    secondary: {
      main: '#fc5e32', // orange
      light: '#f7be4d', // yellow
      contrastText: '#dfdce3' // gray
    },
    accent: {
      main: '#f7be4d', // yellow
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Open Sans"',
    ].join(','),
  },overrides: {
    // MuiCardActionArea: {
    //   focusVisible: {
    //     backgroundColor: 'primary'
    //   },
    //   focusHighlight: {
    //     backgroundColor: 'secondary'
    //   }
    // }
  }
});

// wrapping App this way enables MuiThemeProvider
const AppRoot = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(
  <AppRoot />,
  document.getElementById('root')
);
