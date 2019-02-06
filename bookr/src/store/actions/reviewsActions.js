import { demoAPI } from './api';

export const FETCHING_REVIEWS_START = 'FETCHING_REVIEWS_START';
export const FETCHING_REVIEWS_SUCCESS = 'FETCHING_REVIEWS_SUCCESS';
export const FETCHING_REVIEWS_FAILURE = 'FETCHING_REVIEWS_FAILURE';
export const POSTING_REVIEW_START = 'POSTING_REVIEW_START';
export const POSTING_REVIEW_SUCCESS = 'POSTING_REVIEW_SUCCESS';
export const POSTING_REVIEW_FAILURE = 'POSTING_REVIEW_FAILURE';

export const getReviews = () => dispatch => {
  console.log("GET reviews action");
  dispatch({ type: FETCHING_REVIEWS_START });
  demoAPI
    .get("reviews")
    .then( res => {
      console.log(res.data);
      dispatch({ type: FETCHING_REVIEWS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: FETCHING_REVIEWS_FAILURE, payload: err.data});
    })
}

export const postReview = (reviewData) => dispatch => {
  console.log("POST review action: ", reviewData);
  dispatch({ type: POSTING_REVIEW_START, payload: reviewData });
  demoAPI
  .post("reviews", reviewData)
  .then( res => {
    console.log("post review success: ", res.data);
    dispatch({ type: POSTING_REVIEW_SUCCESS });
  })
  .catch( err => {
    console.log("post review failure: ", err.data);
    dispatch({ type: POSTING_REVIEW_FAILURE });
  })
}