import { demoAPI } from './api';

export const FETCHING_BOOKS_START = 'FETCHING_BOOKS_START';
export const FETCHING_BOOKS_SUCCESS = 'FETCHING_BOOKS_SUCCESS';
export const FETCHING_BOOKS_FAILURE = 'FETCHING_BOOKS_FAILURE';

export const getBooks = () => dispatch => {
  console.log("GET books action");
  dispatch({ type: FETCHING_BOOKS_START });
  demoAPI
    .get("books/1")
    .then( res => {
      console.log(typeof(res.data));
      dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data})
    })
    .catch( err => {
      console.log(err);
    })
}