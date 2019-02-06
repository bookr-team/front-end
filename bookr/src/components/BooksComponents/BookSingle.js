import React from 'react';
import { Link } from 'react-router-dom';

import BookCard from './BookCard';
import ReviewForm from '../ReviewsComponents/ReviewForm';

function BookSingle(props) {
  return (
    <div style={{ maxWidth: '40%', margin: '0 auto'}}>
      <Link to="/loggedin">Back to books</Link>
      <BookCard 
        book={props.book}
        reviews={props.reviews}
      />
      <ReviewForm 
        userName={"logged in user"}
        bookID={props.book.id}
        postReview={props.postReview}
      />
    </div>
  )
}

export default BookSingle;