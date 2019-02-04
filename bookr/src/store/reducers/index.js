import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: '',
  userName: '',
  books: [
    {
      title: 'Test book1',
      author: 'Test author 1',
      publisher: 'Test publisher1',
      reviews: [
        {
            reviewer: 'Test reviewer 1',
            review: 'this is a good test review 1'
        },
        {
          reviewer: 'Test reviewer 2',
          review: 'this is a good test review 2'
        }
      ]
    },
    {
      title: 'Test book2',
      author: 'Test author 2',
      publisher: 'Test publisher2',
      reviews: [
        {
            reviewer: 'Test reviewer 1',
            review: 'this is a good test review 3'
        },
        {
          reviewer: 'Test reviewer 2',
          review: 'this is a good test review 4'
        }
      ]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default: 
      return state;
  }
}

export default rootReducer;