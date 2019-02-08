import axios from 'axios';
import {
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_ERRORS,
  CLEAR_PHOTOS
} from './types';
import { API_ROOT, CLIENT_ID } from '../constants/service-info';

export const onGetPhotos = (options) => dispatch => {
  dispatch({
    type: GET_PHOTOS
  });
  const { query, page, per_page, url } = options;
  const clientID = `client_id=${CLIENT_ID}`
  const photoQuery = clientID + '' 
              + `&page=${page ? page : 1}`
              + `&per_page=${per_page ? per_page : 10}`;

  axios.get(`${API_ROOT}/${url}?${photoQuery}`)
    .then(res => {
      const { data } = res;
      dispatch(setBuildingsStore(data, page));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: null
      });
    });
}

export const onClearPhotos = () => dispatch => {
  dispatch({
    type: CLEAR_PHOTOS
  })
}

export const setBuildingsStore = (decoded, page) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    payload: decoded,
    page: page + 1
  }
}
