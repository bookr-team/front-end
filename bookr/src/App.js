import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'; // Switch
import { withRouter } from 'react-router';

import {
  checkCurrentLogin,
  deleteBook,
  deleteReview,
  logout
} from './store/actions';

// import auth from './components/auth/auth';
import Nav from './components/NavComponents/Nav';
import Footer from './components/FooterComponents/Footer';
import BookView from './views/BookView/BookView';
import HomeView from './views/HomeView/HomeView';
import SettingsView from './views/SettingsView/SettingsView';
import Landing from './Landing';
import LoginRegisterView from './views/LoginRegisterView/LoginRegisterView';

import Grid from '@material-ui/core/Grid';

import './App.css';

class App extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  delete = (id, type) => {
    // putting this in App in case we want it to be available to HomeView as well. 
    // need to undo cond'l render in BookCard if so
    if (type === 'book') {
      console.log("App: deleteBook");
      this.props.deleteBook(id);
      this.props.history.push('/loggedin');
    }
    if (type === 'review') {
      console.log("App: deleteReview", id);
      this.props.deleteReview(id);
    }
  }

  render() {
    // console.log("App render, isLoggingIn: ", this.props.isLoggingIn);
    return (
      <div className="App">
        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ "min-height": "100vh" }}
        >
          <Grid item xs={12}>
            <Nav handleLogout={this.handleLogout}></Nav>
          </Grid>
          <Grid item xs={12}>
            {/* Main container */}
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginRegisterView} />
            <Route path="/register" component={LoginRegisterView} />
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
            <Route path="/settings" component={SettingsView} />
          </Grid>
          <Grid item xs={12}>
            <Footer handleLogout={this.handleLogout}></Footer>
          </Grid>
        </Grid>
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
  {
    checkCurrentLogin,
    deleteBook,
    deleteReview,
    logout
  }
)(App));
