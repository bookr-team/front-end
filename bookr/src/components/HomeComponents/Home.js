import React from 'react';

import BookCard from '../BooksComponents/BookCard';

function Home(props) {
  return (
    <div className="Home">
      <h1>Welcome to BOOKR, {props.userName}</h1>
      <BookCard book={props.books.title} />
    </div>
  );
}

export default Home;