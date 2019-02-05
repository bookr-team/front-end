import React from 'react';
import { Link } from 'react-router-dom';

import BookCard from './BookCard';

function BookSingle(props) {
  return (
    <>
      <Link to="/loggedin">Back to books</Link>
      <BookCard book={props.book} />
    </>
  )
}

export default BookSingle;