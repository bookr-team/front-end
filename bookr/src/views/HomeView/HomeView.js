import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks, getReviews, addBook } from '../../store/actions';

import Home from '../../components/HomeComponents/Home';

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
      <Home 
        userName={props.userName}
        books={props.books}
        reviews={props.reviews}
        logout={props.logout}
        addBook={props.addBook}
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
    hasLatestBooks: state.hasLatestBooks,
    hasLatestReviews: state.hasLatestReviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
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