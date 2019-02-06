import React from 'react';
import { connect } from 'react-redux';

import { postReview, getReviews } from '../../store/actions';

import BookSingle from  '../../components/BooksComponents/BookSingle';

function BookView(props) {

  // console.log("BookView: ", props.books);
  // console.log(props.match.params.id);
  const book = props.books.find(book => book.id.toString() === props.match.params.id);
  // console.log(book);
  const reviews = props.reviews.filter(review => review.books_id === book.id);
  // console.log("BookView, Reviews: ", reviews);
  if(!props.hasLatestReviews) {
    props.getReviews();
  }

  return (
    <BookSingle 
      book={book} 
      reviews={reviews} 
      postReview={props.postReview}
      userName={props.userName}
      hasLatestReviews={props.hasLatestReviews}
    />
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews,
    hasLatestReviews: state.hasLatestReviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  {
    postReview,
    getReviews
  }
)(BookView);