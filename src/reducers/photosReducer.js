import {
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  CLEAR_PHOTOS
} from '../actions/types';

const initialState = {
  photos: [],
  page: 1,
  isLoading: false,
  isError: false
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [
          ...state.photos,
          ...action.payload
        ],
        page: action.page,
        isLoading: false,
        isError: false
      }
    case CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
        page: 1,
        isLoading: false,
        isError: true
      }
    default: 
      return state;
  }
}
