import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import { login } from '../../store/actions';

import Login from '../../components/LoginComponents/Login';

function LoginView(props) {
  console.log("login view is logging in: ", props.isLoggingIn);
  return (
    <Login 
      login={props.login}
      isLoggingIn={props.isLoggingIn}
      isLoggedIn={props.isLoggedIn}
    />
  );
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginView);