import React from 'react';
import { connect } from 'react-redux';

import Login from '../../components/LoginComponents/Login';

function LoginView(props) {
  return (
    <Login />
  );
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(LoginView);