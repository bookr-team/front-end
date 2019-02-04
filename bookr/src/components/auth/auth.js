import React from 'react';

const auth = App => LoginPage => 
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
    }

    render() {
      if(this.state.loggedIn) return <App />;
      return <LoginPage />
    }
  }

export default auth;