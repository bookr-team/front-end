import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
        <Button name="logout" color="primary" onClick={this.handleLogout}>Log Out</Button>
        <Typography variant="h2">Welcome to BOOKR, {this.props.userName}</Typography>
        <Grid 
          container 
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {booksCards}
        </Grid>
      </div>
    );
  }  
}

export default withRouter(Home);