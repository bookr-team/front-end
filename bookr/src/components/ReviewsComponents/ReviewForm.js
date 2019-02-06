import React from 'react';
import Button from '@material-ui/core/Button';
import StarRatings from 'react-star-ratings';
// import TextField from '@material-ui/core/TextField';

class ReviewForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      reviewer: props.userName,
      ratingInput: 0,
      reviewInput: "",
      bookID: props.bookID,
      inputInvalid: true
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
      book_id: this.state.bookID
    };
    try {
      console.log("post review: ", reviewData);
      this.state.reviewInput && this.props.postReview(reviewData);
      // todo: need to push to history?
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handlePostReview}>
          {/* <input
            type="number"
            name="ratingInput"
            value={this.state.ratingInput}
            onChange={this.handleInput}
          /> */}
          {/* <img alt="" src={starFilled}></img> */}
          {/* <Rating
            style={{ width: "150px", height: "40px", backgroundColor: "red" }}
            start={0}
            stop={0}
            step={1}
            initialRating={0}
            // emptySymbol={starOutline}
            // fullSymbol={starFilled}
          /> */}
          <StarRatings 
            rating={this.state.ratingInput}
            starEmptyColor="rgb(223,220,227" // #dfdce3
            starRatedColor="rgb(252,94,50)"  // #fc5e32
            starHoverColor="rgb(247,190,77)" // #f7be4d
            changeRating={this.handleRatingChange}
            numberOfStars={5}
            name="ratingInput"
          />
          <textarea
            placeholder="Write a review..."
            name="reviewInput"
            value={this.state.reviewInput}
            onChange={this.handleInput}
            autoComplete="off"
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
      </>
    );
  }
}
    
export default ReviewForm;