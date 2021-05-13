import {
  IS_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ERROR_TO_FALSE,
  LOGOUT
} from './action';

const initialState = {
  user: {},
  isFetching: false,
  success: false,
  error: false,
  message: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true,
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.user,
        success: action.success,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
        message: action.message,
      }
    case ERROR_TO_FALSE:
      return {
        ...state,
        error: action.error,
      }
    case LOGOUT:
      return {
        ...state,
        user: action.user,
        isFetching: action.isFetching,
        success: action.success,
        error: action.error,
      }
    default:
      return state;
  }
};

export default loginReducer;