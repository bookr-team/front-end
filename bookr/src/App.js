import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'; // Switch
import { withRouter } from 'react-router';

import { checkCurrentLogin } from './store/actions';

// import auth from './components/auth/auth';
import HomeView from './views/HomeView/HomeView';
import Landing from './Landing';
import LoginView from './views/LoginView/LoginView';

import './App.css';

class App extends React.Component {

  render () {
    // const isLoggedIn = this.props.isLoggedIn;
    // console.log("App render, loggedIn? ", isLoggedIn);

    return (
      <div className= "App">
        {/* <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={LoginView} />
          { isLoggedIn && 
            <Route exact path="/loggedIn" component={HomeView} />
          }
        </Switch> */}
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginView} />
        <Route exact path="/loggedin" component={HomeView} />
        {/* <ConditionalRender />  */}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  userName: state.userName
})

// const ConditionalRender = auth(HomeView)(LoginView);

export default withRouter(connect(
  mapStateToProps,
  { checkCurrentLogin }
)(App));
