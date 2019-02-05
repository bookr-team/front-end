import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'; // Switch
import { withRouter } from 'react-router';

import { checkCurrentLogin } from './store/actions';

// import auth from './components/auth/auth';
import BookView from './views/BookView/BookView';
import HomeView from './views/HomeView/HomeView';
import Landing from './Landing';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';

import './App.css';

class App extends React.Component {

  render () {
    // console.log("App render, isLoggingIn: ", this.props.isLoggingIn);
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
        <Route path="/register" component={RegisterView} />
        <Route exact path="/loggedin" component={HomeView} />
        <Route 
          path="/loggedin/book/:id" component={BookView} />
        {/* <ConditionalRender />  */}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  userName: state.userName,
  // isLoggingIn: state.isLoggingIn
})

// const ConditionalRender = auth(HomeView)(LoginView);

export default withRouter(connect(
  mapStateToProps,
  { checkCurrentLogin }
)(App));
