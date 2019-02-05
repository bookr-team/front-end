import React from 'react';

function BookCard(props) {
  return (
    <div className= "Book-card">
      <h3>{props.book.title}</h3>
      <h4>By {props.book.author}</h4>
      <div>Published by {props.book.publisher}</div>
      <p>Summary: {props.book.summary}</p>
    </div>
  )
}

export default BookCard;