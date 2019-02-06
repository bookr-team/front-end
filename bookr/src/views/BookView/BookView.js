import React from 'react';
import { connect } from 'react-redux';

import BookSingle from  '../../components/BooksComponents/BookSingle';

function BookView(props) {

  // console.log("BookView: ", props.books);
  // console.log(props.match.params.id);
  const book = props.books.find(book => book.id.toString() === props.match.params.id);
  // console.log(book);
  const reviews = props.reviews.filter(review => review.book_id === book.id);
  // console.log("BookView, Reviews: ", reviews);

  return (
    <BookSingle 
      book={book} 
      reviews={reviews} 
    />
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews
  }
}

export default connect(
  mapStateToProps,
  {}
)(BookView);