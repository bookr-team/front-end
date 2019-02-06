import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import BookCard from './BookCard';
import ReviewForm from '../ReviewsComponents/ReviewForm';

function BookSingle(props) {

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
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
          userName={props.userName}
          bookID={props.book.id}
          postReview={props.postReview}
        />
      </Grid>
    </Grid>
  )
}

export default BookSingle;