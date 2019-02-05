import React from 'react';

function BookCard(props) {
  return (
    <div className= "Book-card">
      <h3>{props.book}</h3>
    </div>
  )
}

export default BookCard;