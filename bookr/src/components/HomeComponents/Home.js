import React from 'react';
import { withRouter } from 'react-router';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import BookCard from '../BooksComponents/BookCard';
import AddBookForm from '../BooksComponents/AddBookForm';
import ProgressBar from '../../components/LoadingAnimationComponents/ProgressBar';

// sources:
// https://material-ui.com/demos/progress/
// https://material-ui.com/utils/modal/

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      addBookModal: false
    }
  }

  handleOpen = () => {
    this.setState({ addBookModal: true });
  }

  handleClose = () => {
    this.setState({ addBookModal: false });
  }

  render() {

    const modalStyle = {
      transform: `translate(60vh, 30vh)`,
      width: `33%`,
    };

    if(!this.props.isFetchingBooks && !this.props.isFetchingReviews) {
      // only render if we have a book & reviews
      if(!this.props.books) {
        console.log("no books");
        return "Server gave no books :("
      }
      const booksCards = this.props.books.map(book => 
        <Grid key={book.id} item xs={4}>
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
        <div className="Home" style={{padding: "0 60px 20px 60px" }}>
          <IconButton color="primary" onClick={this.handleOpen}>
            <AddIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            color="primary"
            // style={{ maxWidth: '400px' }}
          >
            Add a Book!
          </Typography>
          <Grid 
            container 
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            wrap="wrap"
          >
            {booksCards}
            <Modal 
              open={this.state.addBookModal}
              onClose={this.handleClose}
            >
              <div style={modalStyle}>
                <AddBookForm 
                  addBook={this.props.addBook}
                  closeModal={this.handleClose}
                />
              </div>
            </Modal>
          </Grid>
        </div>
      );
    } else {
      return <ProgressBar />
    }
  }  
}

export default withRouter(Home);