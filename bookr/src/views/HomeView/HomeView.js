import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../store/actions';

import Home from '../../components/HomeComponents/Home';

function HomeView(props) {

  console.log("HomeView");
  // props.getBooks();  // if successful, props.books = [books here!]

  return (
    <div className="HomeView">
      <Home 
        userName={props.userName}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(
  mapStateToProps,
  {
    getBooks
  }
)(HomeView);