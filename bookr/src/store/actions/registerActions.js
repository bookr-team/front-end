export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (userData) => dispatch => {
  dispatch({ type: REGISTER_START });
  console.log("register action, userData: ", userData);
  localStorage.setItem('bookrUser', JSON.parse(userData).username);
  dispatch({ type: REGISTER_SUCCESS, payload: JSON.parse(userData).username });
  // throw "register failure";
  // API
  // .post("register", userData)
  // .then( res => {
  //   console.log(res);
  //   localStorage.setItem('bookrUser', userData.username);
  //   // todo: cases if register success or fail
  //   dispatch({ type: REGISTER_SUCCESS, payload: userData.username });
  // })
  // .catch( err => {
  //   console.log(err);
  //   dispatch({ type: REGISTER_FAILURE, payload: err.response })
  //   throw "register failure";
  // })
}