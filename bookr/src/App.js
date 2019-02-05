import React from 'react';
import { withRouter } from 'react-router';
// import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkCurrentLogin } from './store/actions';

import auth from './components/auth/auth';
import LoginView from './views/LoginView/LoginView';
import HomeView from './views/HomeView/HomeView';

import './App.css';

class App extends React.Component {

  render () {
    return (
      <div className= "App">
      {/* routes here */}
        <ConditionalRender />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  userName: state.userName
})

const ConditionalRender = auth(HomeView)(LoginView);

export default withRouter(connect(
  mapStateToProps,
  { checkCurrentLogin }
)(App));
