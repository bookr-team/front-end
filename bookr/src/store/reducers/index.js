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
  ADDING_BOOK_START,
  ADDING_BOOK_SUCCESS,
  ADDING_BOOK_FAILURE,
  DELETING_BOOK_START,
  DELETING_BOOK_SUCCESS,
  DELETING_BOOK_FAILURE,
  FETCHING_REVIEWS_START,
  FETCHING_REVIEWS_SUCCESS,
  FETCHING_REVIEWS_FAILURE,
  POSTING_REVIEW_START,
  POSTING_REVIEW_SUCCESS,
  POSTING_REVIEW_FAILURE,
  DELETING_REVIEW_START,
  DELETING_REVIEW_SUCCESS,
  DELETING_REVIEW_FAILURE,
} from '../actions';

const user = localStorage.getItem('bookrUser'); // todo: udpdate to token.
// console.log(user);
const loggedIn = user ? true : false;

const initialState = {
  isLoggedIn: loggedIn,
  isLoggingIn: false,
  isRegistering: false,
  isFetchingBooks: true,
  isAddingBook: false,
  isDeletingBook: false,
  isFetchingReviews: true,
  isPostingReview: false,
  isDeletingReview: false,
  hasLatestBooks: false,
  hasLatestReviews: false,
  error: '',
  userName: user,
  books: [],
  reviews: []
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
        error: `bad login: ${action.payload}`
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
        error: `bad register: ${action.payload}`
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
        hasLatestBooks: true,
        books: action.payload
      }
    case FETCHING_BOOKS_FAILURE:
      return {
        ...state,
        isFetchingBooks: false,
        hasLatestBooks: false,
        error: action.payload
      }
    case ADDING_BOOK_START:
      return {
        ...state,
        isAddingBook: true,
        error: ''
      }
    case ADDING_BOOK_SUCCESS:
      return {
        ...state,
        isAddingBook: false,
        hasLatestBooks: false
      }
    case ADDING_BOOK_FAILURE:
      return {
        ...state,
        isAddingBook: false,
        error: action.payload
      }
    case DELETING_BOOK_START:
      return {
        ...state,
        isDeletingBook: true,
        error: ''
      }
    case DELETING_BOOK_SUCCESS:
      return {
        ...state,
        isDeletingBook: false,
        hasLatestBooks: false
      }
    case DELETING_BOOK_FAILURE:
      return {
        ...state,
        isDeletingBook: false,
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
        hasLatestReviews: true,
        reviews: action.payload
      }
    case FETCHING_REVIEWS_FAILURE:
      return {
        ...state,
        isFetchingReviews: false,
        hasLatestReviews: false,
        error: action.payload
      }
    case POSTING_REVIEW_START:
      return {
        ...state,
        isPostingReview: true,
        error: ''
      }
    case POSTING_REVIEW_SUCCESS:
      return {
        ...state,
        isPostingReview: false,
        hasLatestReviews: false,
      }
    case POSTING_REVIEW_FAILURE:
      return {
        ...state,
        isPostingReview: false,
        hasLatestReviews: false,
        error: action.payload
      }
    case DELETING_REVIEW_START:
      return {
        ...state,
        isDeletingReview: true,
        error: ''
      }
    case DELETING_REVIEW_SUCCESS:
      return {
        ...state,
        isDeletingReview: false,
        hasLatestReviews: false,
      }
    case DELETING_REVIEW_FAILURE:
      return {
        ...state,
        isDeletingReview: false,
        hasLatestReviews: false,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default rootReducer;