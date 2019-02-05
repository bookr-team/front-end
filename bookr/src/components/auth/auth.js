import React from 'react';

const auth = HomeView => LoginView =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        user: ""
      }
    }

    componentDidMount() {
      const user = localStorage.getItem('bookrUser');
      console.log("cdm auth, user: ", user);
      
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        });
        this.props.history.push('/loggedin')
      };
    }

    render() {
      console.log("render, auth: this.state.user = ", this.state.user);
      if (this.state.loggedIn) {
        return <HomeView /> 
      }
      return <LoginView />
    }
  }

export default auth;