import React from 'react';
import { connect } from 'react-redux';

import { login, register } from '../../store/actions';

import LoginRegister from '../../components/LoginRegisterComponents/LoginRegister';

function LoginRegisterView(props) {

  console.log("LoginRegisterView", props.location.pathname);
  return (
    <LoginRegister 
      login={props.login}
      register={props.register}
      isLoggingIn={props.isLoggingIn}
      isRegistering={props.isRegistering}
      isLoggedIn={props.isLoggedIn}
      path={props.location.pathname}
    />
  );
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
  isRegistering: state.isRegistering,
  isLoggedIn: state.isLoggedIn,
});

export default connect(
  mapStateToProps,
  { login, register }
)(LoginRegisterView);