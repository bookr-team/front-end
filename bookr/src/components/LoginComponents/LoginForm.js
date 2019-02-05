import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      role: 1,
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
      this.state.userNameInput && this.props.login(JSON.stringify(userData));this.props.history.push('/loggedin'); // once logged in, redirect
    } catch(err) {
      this.props.history.push('/login');
      console.log(err);
    }
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
          <button 
            type="submit" 
            value="Login" 
            disabled={this.state.inputInvalid}
          >
            Log In
          </button>
          <Link to="/register">Register</Link>
        </form>
      </>
    );
  }
}
    
export default withRouter(LoginForm);