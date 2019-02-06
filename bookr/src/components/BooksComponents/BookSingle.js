import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import BookCard from './BookCard';
import ReviewForm from '../ReviewsComponents/ReviewForm';

function BookSingle(props) {
  return (
    <div style={{ maxWidth: '40%', margin: '0 auto'}}>
      <Link to="/loggedin">
        <Button 
          value="Back to Books"
          color="primary"
          children="Back to Books"
          style={{ fontFamily: 'aleo' }}
        />
      </Link>
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