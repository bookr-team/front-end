import React from 'react';
import { connect } from 'react-redux';

import { checkCurrentLogin } from './store/actions';

import LoginView from './views/LoginView/LoginView';
import HomeView from './views/HomeView/HomeView';

import './App.css';

function App(props) {
checkCurrentLogin();
const conditionalRender = props.isLoggedIn ? 
<HomeView 
  userName={props.userName}
/> 
: <LoginView />;

return (
  <div className= "App">
    {conditionalRender}
  </div>
);
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  userName: state.userName
})

export default connect(
  mapStateToProps,
  { checkCurrentLogin }
)(App);
