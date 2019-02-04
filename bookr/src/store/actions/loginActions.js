export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (userName) => dispatch => {
  dispatch({ type: LOGIN_START });
  // LOGIN ACTION
  localStorage.setItem('bookrUser', userName);
  // todo: cases if login success or fail
  dispatch({ type: LOGIN_SUCCESS, payload: userName });
}