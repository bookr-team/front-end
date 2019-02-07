import React from 'react';
import { withRouter } from 'react-router';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import BookCard from '../BooksComponents/BookCard';
import AddBookForm from '../BooksComponents/AddBookForm';
import ProgressBar from '../../components/LoadingAnimationComponents/ProgressBar';

class Home extends React.Component {

  render() {
    if(!this.props.isFetchingBooks && !this.props.isFetchingReviews) {
      // only render if we have a book & reviews
      // console.log("render in Home ", this.props.books);
      const booksCards = this.props.books.map(book => 
        <Grid key={book.id} item xs={4}>
          <BookCard 
            book={book} 
            delete={this.props.delete}
            isFetchingBooks={this.props.isFetchingBooks}
            isFetchingReviews={this.props.isFetchingReviews}
          />
        </Grid>
        );
      
      return (
        <div className="Home" style={{padding: "20px 60px" }}>
          <Grid 
            container 
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            {booksCards}
            <AddBookForm 
              addBook={this.props.addBook}
            />
          </Grid>
        </div>
      );
    } else {
      return <ProgressBar />
    }
  }  
}

export default withRouter(Home);