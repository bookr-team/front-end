// import { API, demoAPI } from './api';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGGED_IN_FALSE = 'LOGGED_IN_FALSE';
export const LOGGED_IN_TRUE = 'LOGGED_IN_TRUE';

export const checkCurrentLogin = () => dispatch => {
  console.log("checking current login");
  const userName = localStorage.getItem('bookrUser');
  userName ?
  dispatch({ type: LOGGED_IN_TRUE, payload: userName})
  : dispatch({ type: LOGGED_IN_FALSE})
}

export const login = (userData) => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.setItem('bookrUser', userData.username);
  dispatch({ type: LOGIN_SUCCESS, payload: userData.username });
  // API
  // .post("login", userData)
  // .then( res => {
  //   console.log(res);
  //   localStorage.setItem('bookrUser', userData.username);
  //   // todo: cases if login success or fail
  //   dispatch({ type: LOGIN_SUCCESS, payload: userData.username });
  // })
  // .catch( err => {
  //   console.log(err);
  //   dispatch({ type: LOGIN_FAILURE, payload: err.response })
  // })
}