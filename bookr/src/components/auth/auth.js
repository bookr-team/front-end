import React from 'react';
import { Route } from 'react-router-dom';

const auth = HomeView => LoginView =>
  class extends React.Component {
    constructor(props) {
      super();
      this.state = {
        loggedIn: false,
        user: ""
      }
      this.props = props;
    }

    componentDidMount() {
      const user = localStorage.getItem('bookrUser');
      
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        });
      };
      if (this.state.loggedIn){this.props.history.push('/loggedIn')};
    }

    render() {
      if (this.state.loggedIn) {
        return <Route path="/loggedIn" component={HomeView} /> 
      }
      return <Route path="/login" component={LoginView} /> //<LoginView /> //
    }
  }

export default auth;