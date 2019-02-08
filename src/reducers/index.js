import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import photosReducer from './photosReducer';
import usersReducer from './usersReducer'

export default combineReducers({
  errors: errorReducer,
  photos: photosReducer,
  users: usersReducer
});