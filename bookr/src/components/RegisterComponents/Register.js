import React from 'react';

import RegisterForm from './RegisterForm';

function Register(props) {
  return (
    <div className="register">
      <h1>Welcome to Register</h1>
      <p>maybe an image here</p>
      <RegisterForm register={props.register} />
    </div>
  );
}

export default Register;