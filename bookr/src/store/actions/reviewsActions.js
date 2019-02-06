import { demoAPI } from './api';

export const FETCHING_REVIEWS_START = 'FETCHING_REVIEWS_START';
export const FETCHING_REVIEWS_SUCCESS = 'FETCHING_REVIEWS_SUCCESS';
export const FETCHING_REVIEWS_FAILURE = 'FETCHING_REVIEWS_FAILURE';

export const getReviews = () => dispatch => {
  console.log("GET reviews action");
  dispatch({ type: FETCHING_REVIEWS_START });
  demoAPI
    .get("reviews")
    .then( res => {
      console.log(typeof(res.data));
      dispatch({ type: FETCHING_REVIEWS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: FETCHING_REVIEWS_FAILURE, payload: err.data});
    })
}