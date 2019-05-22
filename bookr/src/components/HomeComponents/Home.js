import React from 'react';
import { withRouter } from 'react-router';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import BookCard from '../BooksComponents/BookCard';
import AddBookForm from '../BooksComponents/AddBookForm';
import ProgressBar from '../../components/LoadingAnimationComponents/ProgressBar';

// sources:
// https://material-ui.com/demos/progress/
// https://material-ui.com/demos/dialogs/

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      addBookDialog: false
    }
  }

  handleOpen = () => {
    this.setState({ addBookDialog: true });
  }

  handleClose = () => {
    this.setState({ addBookDialog: false });
  }

  render() {

    const dialogStyle = {
      // transform: `translate(0vh, 30vh)`,
      // width: `33%`,
    };

    if (!this.props.isFetchingBooks && !this.props.isFetchingReviews) {
      // only render if we have a book & reviews
      if (!this.props.books) {
        console.log("no books");
        return "Server gave no books :("
      }
      const booksCards = this.props.books.map(book =>
        <Grid key={book.id} item xs={12} sm={6} md={4}>
          <BookCard
            book={book}
            reviews={this.props.reviews}
            delete={this.props.delete}
            isFetchingBooks={this.props.isFetchingBooks}
            isFetchingReviews={this.props.isFetchingReviews}
            dispReviews={false}
          />
        </Grid>
      );

      return (
        <div className="Home" style={{ padding: "0 60px 20px 60px" }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Button color="primary" onClick={this.handleOpen}>
                <Typography
                  variant="h6"
                  color="primary"
                >
                  +  Add a Book!
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            wrap="wrap"
          >
            {booksCards}
          </Grid>
          <Dialog
            open={this.state.addBookDialog}
            onClose={this.handleClose}
          >
            <AddBookForm
              addBook={this.props.addBook}
              closeDialog={this.handleClose}
            />
          </Dialog>
        </div>
      );
    } else {
      return <ProgressBar />
    }
  }
}

export default withRouter(Home);