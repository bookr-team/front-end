import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class LoginRegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
      role: 0,
      inputInvalid: true,
      error: "",
      errorSeen: false
    }
  }

  componentDidMount() {
    // console.log("login form is logged in: ", this.props.isLoggedIn);
    if(this.props.isLoggingIn || this.props.isRegistering) {
      this.setState({
        inputInvalid: true
      });
    }
    console.log("Login/Register: error, ", this.props.error);
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    }, () => this.validateInput());
  }

  validateInput = () => {
    if(this.props.path === '/login') {
      if(this.state.userNameInput && this.state.passwordInput) {
        // console.log("good input");
        this.setState({
          inputInvalid: false
        });
      } else {
        this.setState({
          inputInvalid: true
        });
      }
    }
    if(this.props.path === '/register') {
      if(this.state.userNameInput && this.state.passwordInput) {
        if(this.state.passwordInput === this.state.passwordConfirmInput) {
          console.log("good input");
          this.setState({
            inputInvalid: false
          });
        } else {
          this.setState({
            inputInvalid: true
          });
        }
      } else {
        this.setState({
          inputInvalid: true
        });
      }
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      role: this.state.role
    };
    try {
      !this.state.inputInvalid && this.props.login(userData);
    } catch(err) {
      this.props.history.push('/login');
      console.log("login form error: ", err);
      return;
    }
  }

  handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      role: this.state.role
    };
    try {
      !this.state.inputInvalid && this.props.register(userData);
    } catch(err) {
      this.props.history.push('/login');
      console.log("register form error: ", err);
      return;
    }
  }

  clearError = () => {
    console.log("clearing error");
    this.setState({ error: "", errorSeen: true });
  }

  render() {
    // once logged in, redirect
    this.props.isLoggedIn && this.props.history.push('/loggedin');
    // get error if bad login/register
    if( this.props.error && !this.state.error && !this.state.errorSeen ) this.setState({ error: this.props.error });

    return (
      <>
        <form 
          onSubmit={this.props.path === '/login' ? 
            this.handleLogin 
            : this.handleRegister}
          >
          <TextField
            type="text"
            placeholder="UserName"
            name="userNameInput"
            value={this.state.userNameInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
          />
          <TextField
            type="password"
            placeholder="Password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={this.handleInput}
            autoComplete="off"
            style={{ width: '100%' }}
          />
          {this.props.path === '/register' &&
            <TextField
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmInput"
              value={this.state.passwordConfirmInput}
              onChange={this.handleInput}
              autoComplete="off"
              style={{ width: '100%' }}
            />
          }
          {this.state.error &&
            <Typography type="body2" color="error">
            {this.props.path === '/login' ?
              "Bad Login, wrong user name or password!"
            : "Bad Register, username taken!"
            }
            </Typography>
          }
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
            style={{ height: '65px' }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              style={{maxWidth: "50%"}}
            >
              <Typography variant="body1">
                {this.props.path === '/login' ? "New to Bookr? " : "Already a Bookr?"}
              </Typography>
              <Link to={this.props.path === '/login' ? "/register" : "/login"}>
                <Button color="primary" onClick={this.clearError}>
                {this.props.path === '/login' ? "Register" : "Login"}
                </Button>
              </Link>
            </Grid>
            <Button 
              type="submit" 
              value="LoginRegister" 
              disabled={this.state.inputInvalid}
              color="primary"
            >
              {this.props.isLoggingIn || this.props.isRegistering ? 
              <CircularProgress color="primary" />
              : this.props.path === '/login' ? "Login" : "Register"}
            </Button>
          </Grid>
        </form>
      </>
    );
  }
}

export default withRouter(LoginRegisterForm);