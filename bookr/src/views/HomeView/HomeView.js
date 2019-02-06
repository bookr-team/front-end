import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks, getReviews, logout } from '../../store/actions';

import Home from '../../components/HomeComponents/Home';

function HomeView(props) {

  if (props.isLoggedIn) { // update this to check for token once that's working...
    // console.log(props.books);
    if (props.books.length === 0) {
      props.getBooks();  // if successful, props.books = [books here!]
    }
    if (props.reviews.length === 0) {
      props.getReviews();
    }
    return (
      <Home 
        userName={props.userName}
        books={props.books}
        reviews={props.reviews}
        logout={props.logout}
      />
    )
  } else {
    return (
      <Link to="/login">LOG IN!!</Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  {
    getBooks,
    getReviews,
    logout
  }
)(HomeView);