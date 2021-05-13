import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from './login/reducer';

const rootReducer = combineReducers({
  loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;