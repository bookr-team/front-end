import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: ""
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = (e) => {
    this.state.userNameInput ? localStorage.setItem('bookrUser', this.state.userNameInput)
    : e.preventDefault();
  }

  render() {
    return (
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
    );
  }
}
    
export default LoginForm;