import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';

function Review(props) {

  return(
    <Card>
      <CardContent>
        <Typography 
          variant="h6" 
          component="h2"
        >
          {props.review.reviewer}
        </Typography>
        <StarRatings
          rating={props.review.rating}
          starEmptyColor="rgb(223,220,227" // #dfdce3
          starRatedColor="rgb(252,94,50)"  // #fc5e32
          starHoverColor="rgb(247,190,77)" // #f7be4d
          numberOfStars={5}
          isSelectable="false"
          starDimension="20px"
          starSpacing="2px"
        />
        <Typography 
          component="p"
        >
          {props.review.review}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Review;