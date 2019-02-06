import React from 'react';
import { withRouter } from 'react-router';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Nav from '../NavComponents/Nav';
import BookCard from '../BooksComponents/BookCard';
import AddBookForm from '../BooksComponents/AddBookForm';

class Home extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    console.log("render in Home ", this.props.books);
    const booksCards = this.props.books.map(book => 
      <BookCard 
        key={book.id} 
        book={book} 
      /> );
    
    return (
      <div className="Home">
        <Nav handleLogout={this.handleLogout}></Nav>
        {/* <Button 
          name="logout" 
          color="primary" 
          style={{ fontFamily: 'aleo' }}
          onClick={this.handleLogout}
        >
          Log Out
        </Button> */}
        <Typography 
          variant="h4"
          style={{ fontFamily: 'aleo' }}
        >
          Welcome to BOOKR, {this.props.userName}
        </Typography>
        <Grid 
          container 
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {booksCards}
          <AddBookForm 
            addBook={this.props.addBook}
          />
        </Grid>
      </div>
    );
  }  
}

export default withRouter(Home);