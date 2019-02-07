import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import StarRatings from 'react-star-ratings';
import TextField from '@material-ui/core/TextField';

const emptyReviewForm = {
  ratingInput: 0,
  reviewInput: "",
  inputInvalid: true
}

class ReviewForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...emptyReviewForm,
      reviewer: props.userName,
      bookID: props.bookID,
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    }, () => this.validateInput());
  }

  handleRatingChange = (value, name) => {
    this.setState ({
      [name]: value
    })
  }

  validateInput = () => {
    // console.log("validating input: ", this.state.reviewerInput;
    this.setState({
      inputInvalid: false
    })
  }

  handlePostReview = (e) => {
    e.preventDefault();
    const reviewData = {
      review: this.state.reviewInput,
      rating: parseInt(this.state.ratingInput),
      reviewer: this.state.reviewer,
      books_id: this.state.bookID
    };
    try {
      console.log("post review: ", reviewData);
      this.state.reviewInput && this.props.postReview(reviewData);
      // todo: need to push to history?
    }
    catch(err) {
      console.log(err);
      return;
    }
    this.setState({
      ...emptyReviewForm
    });
  }

  render() {
    return (
      <Card style={{ padding: '20px' }}>
        <form onSubmit={this.handlePostReview}>
          <StarRatings 
            rating={this.state.ratingInput}
            starEmptyColor="rgb(223,220,227" // #dfdce3
            starRatedColor="rgb(252,94,50)"  // #fc5e32
            starHoverColor="rgb(247,190,77)" // #f7be4d
            changeRating={this.handleRatingChange}
            numberOfStars={5}
            name="ratingInput"
            starDimension="35px"
            starSpacing="4px"
          />
          <TextField
            placeholder="Write a review..."
            name="reviewInput"
            value={this.state.reviewInput}
            onChange={this.handleInput}
            autoComplete="off"
            multiline
            style={{ width: '100%' }}
          />
          <Button 
            type="submit" 
            value="Register"
            disabled={this.state.inputInvalid}
            color="primary"
          >
            Post Review!
          </Button>
        </form>
      </Card>
    );
  }
}
    
export default ReviewForm;