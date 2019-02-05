import React from 'react';
// import { Route } from 'react-router-dom';

const auth = HomeView => LoginView =>
  class extends React.Component {
    constructor(props) {
      console.log("constructor auth.js");
      super();
      this.state = {
        loggedIn: false,
        user: ""
      }
      this.props = props;
    }

    componentDidMount() {
      const user = localStorage.getItem('bookrUser');
      console.log("cdm auth, user: ", user);
      
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        });
      };
      if (this.state.loggedIn){this.props.history.push('/loggedIn')};
    }

    render() {
      console.log("render, auth: this.state.user", this.state.user);
      if (this.state.loggedIn) {
        return <HomeView userName={this.state.user} /> // <Route path="/loggedIn" component={HomeView} />  // return component instead!!
      }
      return <LoginView /> // <Route path="/login" component={LoginView} /> //<LoginView /> //
    }
  }

export default auth;