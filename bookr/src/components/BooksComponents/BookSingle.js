import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import BookCard from './BookCard';
import ReviewForm from '../ReviewsComponents/ReviewForm';

// sources:
// https://material-ui.com/demos/progress/
// https://material-ui.com/utils/modal/

class BookSingle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      reviewModal: false
    }
  }

  handleOpen = () => {
    this.setState({ reviewModal: true });
  }

  handleClose = () => {
    this.setState({ reviewModal: false });
  }
  
  render() {

    const modalStyle = {
      transform: `translate(100%, 100%)`,
      width: `33%`
    };

    console.log("fetching books: ", this.props.isFetchingBooks);
    console.log("fetching reviews: ", this.props.isFetchingReviews);

    if(!this.props.isFetchingBooks && !this.props.isFetchingReviews) {
      // only render if we have a book & reviews
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Link to="/loggedin">
              <Button 
                value="Back to Books"
                color="primary"
                children="Back to Books"
                style={{ fontFamily: 'aleo' }}
              />
            </Link>
            <BookCard 
              book={this.props.book}
              reviews={this.props.reviews}
              delete={this.props.delete}
              isFetchingBooks={this.props.isFetchingBooks}
              isFetchingReviews={this.props.isFetchingReviews}
            />
            <IconButton color="primary" onClick={this.handleOpen}>
              <AddIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              color="primary"
              // style={{ maxWidth: '400px' }}
            >
              Add a Review!
            </Typography>
            <Modal 
              open={this.state.reviewModal}
              onClose={this.handleClose}
            >
            <div style={modalStyle}>
              <ReviewForm 
                userName={this.props.userName}
                bookID={this.props.book.id}
                postReview={this.props.postReview}
                closeModal={this.handleClose}
              />
            </div>
            </Modal>
          </Grid>
        </Grid>
      );
    } else {  
      return "";
    }
  }
}

export default BookSingle;