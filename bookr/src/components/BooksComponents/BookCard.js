import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function BookCard(props) {
  return (
    <Link 
      to={`/loggedin/book/${props.book.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card raised>
        <Typography variant="h4">Title: {props.book.title}</Typography>
        <Typography variant="h6">By {props.book.author}</Typography>
        <Typography variant="subtitle1">Published by {props.book.publisher}</Typography>
        <Typography variant="body1">Summary: {props.book.summary}</Typography>
      </Card>
    </Link>
  )
}

export default BookCard;