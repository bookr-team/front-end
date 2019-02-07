import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

function Review(props) {
  
  return(
    <Card style={{ margin: '15px 0'}}>
      <CardContent>
        <Grid 
          container 
          direction="row" 
          justify="flex-end" 
        >
        {props.userName === props.review.reviewer && 
          <IconButton 
            onClick={() => props.delete(props.review.id, "review")}
            style={{ margin: "-20px -20px -20px 0"}}
          >
            <DeleteIcon fontSize="small"/>
          </IconButton>
        }
        </Grid>
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