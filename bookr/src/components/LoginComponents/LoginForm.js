import React from 'react';
import { withRouter } from 'react-router';
// import { Route } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      role: 1
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      role: this.state.role
    }
    this.state.userNameInput && this.props.login(userData);
    // todo: try/catch...
    this.props.history.push('/loggedIn');
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
          <button type="submit" value="Login">Log In</button>
        </form>
      </>
    );
  }
}
    
export default withRouter(LoginForm);