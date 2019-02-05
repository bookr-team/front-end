import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
      role: 0
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      passwordConfirm: this.state.passwordConfirmInput,
      role: this.state.role
    };
    try {
      this.state.userNameInput && this.props.register(JSON.stringify(userData));
      this.props.history.push('/loggedin');
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleRegister}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmInput"
            value={this.state.passwordConfirmInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <button type="submit" value="Register">Register</button>
          <Link to="/login">Login</Link>
        </form>
      </>
    );
  }
}
    
export default withRouter(RegisterForm);