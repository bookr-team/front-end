import React from 'react';
import { withRouter } from 'react-router';
// import { Route } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      role: 0
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
    };
    try {
      this.state.userNameInput && this.props.login(JSON.stringify(userData));
      this.props.history.push('/loggedin');
    }
    catch(err) {
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
          <button type="submit" value="Login">Log In</button>
        </form>
      </>
    );
  }
}
    
export default withRouter(LoginForm);