import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../store/actions';

import Home from '../../components/HomeComponents/Home';

function HomeView(props) {

  if (localStorage.getItem('bookrUser')) {
    // console.log(props.books);
    if (props.books.length === 0) {
      props.getBooks();  // if successful, props.books = [books here!]
    }
    return (
      <Home 
        userName={props.userName}
        books={props.books}
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
    userName: state.userName
  }
}

export default connect(
  mapStateToProps,
  {
    getBooks
  }
)(HomeView);