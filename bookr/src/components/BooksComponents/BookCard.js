import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';

import Review from '../ReviewsComponents/Review';

import bookImg from '../../img/sophia-baboolal-86224-unsplash.jpg';

// https://material-ui.com/demos/cards/

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function BookCard(props) {
  console.log("hello from BookCard, ", props.reviews);
  const { classes } = props;
  let reviews = "";
  let sum = 0;
  let avg = 0;
  if(props.reviews) {
    console.log("BookCard reviews: ", props.reviews);
    reviews = props.reviews
    .filter(review => review.books_id === props.book.id)
    .map(review => {
      sum += review.rating;
      return props.dispReviews && <Review 
        key={review.id} 
        review={review} 
        delete={props.delete}
        userName={props.userName}
    />})
    if (sum > 0) {avg = Math.floor(sum/reviews.length)};
    console.log ("average rating: ", avg);
  }

  return (
    <Card raised style={{ margin: '20px', padding: '20px', minWidth: '300px' }}>
      <Grid 
        container 
        direction="row" 
        justify="flex-end" 
        wrap="wrap"
      >
        {props.location.pathname !== '/loggedin' && 
          <IconButton 
            onClick={() => props.delete(props.book.id, "book")}
            style={{ margin: "-20px -20px -20px 0"}}
          >
          {/* color="#dfdce3" */}
            <DeleteIcon fontSize="small"/>
          </IconButton>
        }
      </Grid>
      <Link 
        to={`/loggedin/book/${props.book.id}`}
        style={{ textDecoration: 'none' }}
      > 
          {/* <CardActionArea> */}
        <Typography 
          variant="h4" 
          style={{ maxWidth: '400px' }}
        >
          {props.book.title}
        </Typography>
        <CardMedia
          className={classes.media}
          image={bookImg}
          title={props.book.title}
          style={{ margin: '15px 0'}}
        />
        { avg ? 
          <StarRatings
            rating={avg}
            starEmptyColor="rgb(223,220,227" // #dfdce3
            starRatedColor="rgb(252,94,50)"  // #fc5e32
            starHoverColor="rgb(247,190,77)" // #f7be4d
            numberOfStars={5}
            isSelectable="false"
            starDimension="20px"
            starSpacing="2px"
          />
          : <Typography variant="body1">Be the first to review!</Typography>
        }
        <Typography variant="h6">By {props.book.author}</Typography>
        <Typography variant="subtitle1">Published by {props.book.publisher}</Typography>
        <Typography variant="body1">Summary: {props.book.summary}</Typography>
        {reviews}
      {/* </CardActionArea> */}
      </Link>
    </Card>
  )
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BookCard));