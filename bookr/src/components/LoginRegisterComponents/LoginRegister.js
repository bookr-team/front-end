import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import bookrLogo from '../../img/bookr-logotype.svg';

import LoginRegisterForm from './LoginRegisterForm';

function LoginRegister(props) {
  return(
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ padding: "20vh 0" }}
    >
      <Card
        style={{ padding: "25px" }}
      >
        <Typography
          variant="h4"
          style={{ marginBottom: "25px" }}
        >
          Welcome to Bookr. {props.path === '/login' ? "Login:" : "Register:"}
        </Typography>
        <CardMedia
          image={bookrLogo}
        />
        <LoginRegisterForm 
          login={props.login} 
          register={props.register}
          isLoggingIn={props.isLoggingIn}
          isRegistering={props.isRegistering}
          isLoggedIn={props.isLoggedIn}
          path={props.path}
        />
      </Card>
    </Grid>
  )
}

export default LoginRegister;