import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'; // Switch
import { withRouter } from 'react-router';

import { checkCurrentLogin, logout } from './store/actions';

// import auth from './components/auth/auth';
import Nav from './components/NavComponents/Nav';
import BookView from './views/BookView/BookView';
import HomeView from './views/HomeView/HomeView';
import Landing from './Landing';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';

import './App.css';

class App extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  delete = () => {
    // putting this in App in case we want it to be available to HomeView as well. 
    // need to undo cond'l render in BookCard if so
    console.log("delete");
  }

  render () {
    // console.log("App render, isLoggingIn: ", this.props.isLoggingIn);
    return (
        <div className= "App">
          <Nav handleLogout={this.handleLogout}></Nav>
          {/* <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginView} />
            { isLoggedin && 
              <Route exact path="/loggedin" component={HomeView} />
            }
          </Switch> */}
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route 
            exact path="/loggedin" 
            component={HomeView}
          />
          <Route 
            path="/loggedin/book/:id" 
            render={props => (
              <BookView
                {...props}
                delete={this.delete}
              />
            )}
          />
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
  { checkCurrentLogin, logout }
)(App));
