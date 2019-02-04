import React from 'react';

import LoginForm from './LoginForm';

function Login(props) {
  return (
    <div className="login">
      <h1>Welcome to Login</h1>
      <p>maybe an image here</p>
      <LoginForm />
    </div>
  );
}

export default Login;