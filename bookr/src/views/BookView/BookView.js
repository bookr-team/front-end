import React from 'react';
import { connect } from 'react-redux';

import BookSingle from  '../../components/BooksComponents/BookSingle';

function BookView(props) {

  // console.log("BookView: ", props.books);
  // console.log(props.match.params.id);
  const book = props.books.find(book => book.id.toString() === props.match.params.id);
  // console.log(book);

  return (
    <BookSingle book={book} />
  );
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(
  mapStateToProps,
  {}
)(BookView);