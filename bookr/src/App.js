import React, { Component } from 'react';

import auth from './components/auth/auth';
import LoginView from './views/LoginView/LoginView';
import HomeView from './views/HomeView/HomeView';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      currUser: ""
    }
    this.props = props;
  }

  componentDidMount() {
    this.setState({
      currUser: localStorage.getItem('bookrUser')
    });
  }

  render() {
    return (
      <div className= "App">
        <ConditionalRender />
      </div>
    );
  }
}

const ConditionalRender = auth(HomeView)(LoginView);

export default App;
