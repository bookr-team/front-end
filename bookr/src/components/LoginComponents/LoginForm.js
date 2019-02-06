import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      role: 0,
      inputInvalid: true
    }
  }

  componentDidMount() {
    console.log("login form is logged in: ", this.props.isLoggedIn);
    
    if(this.props.isLoggingIn) {
      this.setState({
        inputInvalid: true,
        isLoggingIn: true
      });
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    }, () => this.validateInput());
  }

  validateInput = () => {
    // console.log("validating input: ", this.state.userNameInput, this.state.passwordInput);
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

  handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      role: this.state.role
    };
    try {
      this.state.userNameInput && this.props.login(userData);
    } catch(err) {
      this.props.history.push('/login');
      console.log("login form error: ", err);
      return;
    }
    this.props.history.push('/loggedin'); // once logged in, redirect
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            placeholder="UserName"
            name="userNameInput"
            value={this.state.userNameInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <Button 
            type="submit" 
            value="Login" 
            disabled={this.state.inputInvalid}
          >
            Log In
          </Button>
          <Link to="/register">Register</Link>
        </form>
      </>
    );
  }
}
    
export default withRouter(LoginForm);