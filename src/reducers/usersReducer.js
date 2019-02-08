import {
  GET_USERS,
  GET_USERS_SUCCESS,
  SELECT_USER,
  SELECT_USER_SUCCESS,
  CLEAR_USERS
} from '../actions/types';

const initialState = {
  users: null,
  selectedUser: null,
  username: null,
  isLoading: false,
  isError: false
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false
      }
    case SELECT_USER:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case SELECT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload,
        username: action.payload.username,
        isLoading: false,
        isError: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: null,
        selectedUser: null,
        isLoading: false,
        isError: true
      }
    default: 
      return state;
  }
}
