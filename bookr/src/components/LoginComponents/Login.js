import React from 'react';

import LoginForm from './LoginForm';

function Login(props) {
  return (
    <div className="login">
      <h1>Welcome to Login</h1>
      <p>maybe an image here</p>
      <LoginForm 
        login={props.login} 
        isLoggingIn={props.isLoggingIn}
        isLoggedIn={props.isLoggedIn}
      />
    </div>
  );
}

export default Login;