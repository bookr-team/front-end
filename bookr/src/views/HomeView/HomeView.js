import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { getBooks, getReviews, addBook } from '../../store/actions';

import Home from '../../components/HomeComponents/Home';

import Grid from '@material-ui/core/Grid';

function HomeView(props) {

  if (props.isLoggedIn) { // update this to check for token once that's working...
    // console.log(props.books);
    if (!props.hasLatestBooks) {
      props.getBooks();  // if successful, props.books = [books here!]
    }
    if (!props.hasLatestReviews) {
      props.getReviews();
    }
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        style={{ "min-height": "50vh" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{ fontFamily: 'aleo', margin: '20px 20px 0 20px' }}
          >
            Welcome to BOOKR, {props.userName}
          </Typography>
          <Home
            userName={props.userName}
            books={props.books}
            reviews={props.reviews}
            logout={props.logout}
            addBook={props.addBook}
            delete={props.delete}
            isFetchingBooks={props.isFetchingBooks}
            isFetchingReviews={props.isFetchingReviews}
          />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Link to="/login" className="login-notice">LOG IN!!</Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews,
    hasLatestBooks: state.hasLatestBooks,
    hasLatestReviews: state.hasLatestReviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
    isFetchingBooks: state.isFetchingBooks,
    isFetchingReviews: state.isFetchingReviews
  }
}

export default connect(
  mapStateToProps,
  {
    getBooks,
    getReviews,
    addBook,
  }
)(HomeView);