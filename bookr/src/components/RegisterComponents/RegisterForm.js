import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
      role: 0,
      inputInvalid: true
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

  handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.userNameInput,
      password: this.state.passwordInput,
      role: this.state.role
    };
    try {
      this.state.userNameInput && this.props.register(userData);
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
          <Button 
            type="submit" 
            value="Register"
            disabled={this.state.inputInvalid}
            color="primary"
          >
            Register
          </Button>
          <Link to="/login">
            <Button color="primary">
              Login
            </Button>
          </Link>
        </form>
      </>
    );
  }
}
    
export default withRouter(RegisterForm);