import { demoAPI } from './api';

export const FETCHING_BOOKS_START = 'FETCHING_BOOKS_START';
export const FETCHING_BOOKS_SUCCESS = 'FETCHING_BOOKS_SUCCESS';
export const FETCHING_BOOKS_FAILURE = 'FETCHING_BOOKS_FAILURE';
export const ADDING_BOOK_START = 'ADDING_BOOK_START';
export const ADDING_BOOK_SUCCESS = 'ADDING_BOOK_SUCCESS';
export const ADDING_BOOK_FAILURE = 'ADDING_BOOK_FAILURE';

export const getBooks = () => dispatch => {
  console.log("GET books action");
  dispatch({ type: FETCHING_BOOKS_START });
  demoAPI
    .get("books")
    .then( res => {
      console.log("GET books success", res.data);
      dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data})
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: err.data});
    })
}

export const addBook = (bookData) => dispatch => {
  console.log("add book action: ", bookData);
  dispatch({ type: ADDING_BOOK_START, payload: bookData });
  demoAPI
    .post("books", bookData)
    .then( res => {
      console.log("add book success: ", res.data);
      dispatch({ type: ADDING_BOOK_SUCCESS });
    })
    .catch( err => {
      console.log("add book failure: ", err);
      dispatch({ type: ADDING_BOOK_FAILURE });
    });
}