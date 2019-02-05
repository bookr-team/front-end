import React from 'react';
import { connect } from 'react-redux';

import { register } from '../../store/actions';

import Register from '../../components/RegisterComponents/Register';

function RegisterView(props) {
  return (
    <Register 
      register={props.register}
    />
  );
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { register }
)(RegisterView);