import React from 'react';
import { withRouter } from 'react-router';

import BookCard from '../BooksComponents/BookCard';

class Home extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    console.log(this.books);
    return (
      <div className="Home">
        <button name="logout" onClick={this.handleLogout}>Log Out</button>
        <h1>Welcome to BOOKR, {this.props.userName}</h1>
        <BookCard book={this.props.books.title} />
      </div>
    );
  }  
}

export default withRouter(Home);