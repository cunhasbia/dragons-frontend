import apiLogin from '../../services/apiLogin';

export const IS_FETCHING = 'IS_FETCHING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const ERROR_TO_FALSE = 'ERROR_FALSE';
export const LOGOUT = 'LOGOUT';

export const isFetching = () => {
  return {
    type: IS_FETCHING,
    isFetching: true,
  }
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
    success: true,
    isFetching: false
  }
};

export const loginError = (message) => {
  return {
    type: LOGIN_ERROR,
    message,
    error: true,
    isFetching: false,
  }
};

export const errorToFalse = () => {
  return {
    type: ERROR_TO_FALSE,
    error: false,
  }
};

export const userLogin = (email, password) => {
  return (dispatch) => {
    dispatch(isFetching());

    return apiLogin.post('/login', { email, password })
      .then((response) => dispatch(loginSuccess(response.data)))
      .catch(error => dispatch(loginError(error.response.data.message)));
  }
};

export const userLogout = () => {
  return {
    type: LOGOUT,
    user: {},
    isFetching: false,
    success: false,
    error: false,
  }
};