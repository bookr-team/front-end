import React from 'react';
import { Link } from 'react-router-dom';

function BookCard(props) {
  return (
    <Link to={`/loggedin/book/${props.book.id}`} className= "Book-card">
      <h2>Title: {props.book.title}</h2>
      <h4>By {props.book.author}</h4>
      <div>Published by {props.book.publisher}</div>
      <p>Summary: {props.book.summary}</p>
    </Link>
  )
}

export default BookCard;