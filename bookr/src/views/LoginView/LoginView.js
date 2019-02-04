import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/actions';

import Login from '../../components/LoginComponents/Login';

function LoginView(props) {
  return (
    <Login 
      login={props.login}
    />
  );
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { login }
)(LoginView);