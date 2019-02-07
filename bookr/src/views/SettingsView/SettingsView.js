import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Settings from '../../components/SettingsComponents/Settings';

function SettingsView(props) {

  if (props.isLoggedIn) { // update this to check for token once that's working...
    // console.log(props.books);
    return (
      <>
        <Typography 
          variant="h4"
          style={{ fontFamily: 'aleo', margin: '20px' }}
        >
          Settings. User: {props.userName}
        </Typography>
        <Grid 
            container 
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
          <Settings />
          <Settings />
          <Settings />
          <Settings />
          <Settings />
          <Settings />
        </Grid>
      </>
    )
  } else {
    return (
      <Link to="/login" className="login-notice">LOG IN!!</Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews,
    hasLatestBooks: state.hasLatestBooks,
    hasLatestReviews: state.hasLatestReviews,
    userName: state.userName,
    isLoggedIn: state.isLoggedIn,
    isFetchingBooks: state.isFetchingBooks,
    isFetchingReviews: state.isFetchingReviews
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(SettingsView);