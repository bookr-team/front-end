import {
  LOGGED_IN_TRUE,
  LOGGED_IN_FALSE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCHING_BOOKS_START,
  FETCHING_BOOKS_SUCCESS,
  FETCHING_BOOKS_FAILURE,
  FETCHING_REVIEWS_START,
  FETCHING_REVIEWS_SUCCESS,
  FETCHING_REVIEWS_FAILURE,
} from '../actions';

const user = localStorage.getItem('bookrUser'); // todo: udpdate to token.
// console.log(user);
const loggedIn = user ? true : false;

const initialState = {
  isLoggedIn: loggedIn,
  isLoggingIn: false,
  isRegistering: false,
  isFetchingBooks: false,
  isFetchingReviews: false,
  error: '',
  userName: user,
  books: [
    { "id": 1, "title": "FirstBook", "author": "me", "publisher": "book inc", "summary": "stuff", "true": null }, { "id": 2, "title": "SecondBook", "author": "me", "publisher": "bookinc", "summary": null, "true": null }, { "id": 3, "title": "C++ for all", "author": "Prof. SmartyPants", "publisher": "Tech book inc", "summary": "more stuff", "true": null }
  ], // books
  reviews: [
    { "review": "Sdf gfah dd gsdf", "rating": 4, "reviewer": "juste", "book_id" : 1},
    { "review": "Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review ", "rating": 5, "reviewer": "other", "book_id" : 1},
    { "review": "Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review ", "rating": 3, "reviewer": "another", "book_id" : 1},
    { "review": "Sdf gfah dd gsdf", "rating": 4, "reviewer": "juste", "book_id" : 2},
    { "review": "Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review ", "rating": 5, "reviewer": "other", "book_id" : 2},
    { "review": "Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review ", "rating": 3, "reviewer": "another", "book_id" : 2},
    { "review": "Sdf gfah dd gsdf", "rating": 4, "reviewer": "juste", "book_id" : 3},
    { "review": "Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review Different Review ", "rating": 5, "reviewer": "other", "book_id" : 3},
    { "review": "Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review Unique Review ", "rating": 3, "reviewer": "another", "book_id" : 3},
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_TRUE:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload
      }
    case LOGGED_IN_FALSE:
      return {
        ...state,
        isLoggedIn: false,
        userName: ''
      }
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        userName: action.payload,
        error: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userName: '',
        error: ''
      }
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        error: ''
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isLoggedIn: true,
        userName: action.payload,
        error: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      }
    case FETCHING_BOOKS_START:
      return {
        ...state,
        isFetchingBooks: true,
        error: ''
      }
    case FETCHING_BOOKS_SUCCESS:
      return {
        ...state,
        isFetchingBooks: false,
        books: action.payload
      }
    case FETCHING_BOOKS_FAILURE:
      return {
        ...state,
        isFetchingBooks: false,
        error: action.payload
      }
      case FETCHING_REVIEWS_START:
      return {
        ...state,
        isFetchingReviews: true,
        error: ''
      }
    case FETCHING_REVIEWS_SUCCESS:
      return {
        ...state,
        isFetchingReviews: false,
        books: action.payload
      }
    case FETCHING_REVIEWS_FAILURE:
      return {
        ...state,
        isFetchingReviews: false,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default rootReducer;