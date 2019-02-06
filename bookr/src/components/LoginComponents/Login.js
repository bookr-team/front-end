import React from 'react';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import LoginForm from './LoginForm';

import bookrLogo from '../../img/bookr-logotype-altbg.svg';

function Login(props) {
  return (
    <Card>
      <Typography
        variant="h4"
      >
        Log in to Bookr
      </Typography>
      <CardMedia
        image={bookrLogo}
      />
      <LoginForm 
        login={props.login} 
        isLoggingIn={props.isLoggingIn}
        isLoggedIn={props.isLoggedIn}
      />
    </Card>
  );
}

export default Login;