import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

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

    const stylesLinearProgress = {
      root: {
        flexGrow: 1,
      },
    };

    if(this.props.book) {
      // only render if we have a book
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
      const LinearIndeterminate = (props) => {
        const { classes } = props;
        return (
          <div className={classes.root}>
            <LinearProgress />
            <br />
            <LinearProgress color="secondary" />
          </div>
        );
      }
      return withStyles(stylesLinearProgress)(LinearIndeterminate);
    }
  }
}

export default BookSingle;