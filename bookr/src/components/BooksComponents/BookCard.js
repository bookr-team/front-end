import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';

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

  const { classes } = props;
  let reviews = "";
  if(props.reviews) {
    console.log(props.reviews);
    reviews = props.reviews.map(review => <Review key={review.reviewer} review={review} />)
  }

  return (
      <Link 
        to={`/loggedin/book/${props.book.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Card raised >
          <CardActionArea>
            <Typography 
              variant="h4" 
              style={{ maxWidth: '400px' }}
            >
              Title: {props.book.title}
            </Typography>
            <CardMedia
              className={classes.media}
              image={bookImg}
              title={props.book.title}
            />
            <Typography variant="h6">By {props.book.author}</Typography>
            <Typography variant="subtitle1">Published by {props.book.publisher}</Typography>
            <Typography variant="body1">Summary: {props.book.summary}</Typography>
            {reviews}
          </CardActionArea>
        </Card>
      </Link>
  )
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookCard);