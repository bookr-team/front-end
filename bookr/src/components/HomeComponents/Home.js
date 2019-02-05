import React from 'react';
import { withRouter } from 'react-router';

import BookCard from '../BooksComponents/BookCard';

class Home extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    console.log("render in Home ", this.props.books);
    const booksCards = this.props.books.map(book => 
      <BookCard key={book.id} book={book} /> );
    
    return (
      <div className="Home">
        <button name="logout" onClick={this.handleLogout}>Log Out</button>
        <h1>Welcome to BOOKR, {this.props.userName}</h1>
        <div className="books grid">
          {booksCards}
        </div>
      </div>
    );
  }  
}

export default withRouter(Home);