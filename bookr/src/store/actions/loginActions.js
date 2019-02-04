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

export const login = (userName) => dispatch => {
  dispatch({ type: LOGIN_START });
  // LOGIN ACTION
  localStorage.setItem('bookrUser', userName);
  // todo: cases if login success or fail
  dispatch({ type: LOGIN_SUCCESS, payload: userName });
}