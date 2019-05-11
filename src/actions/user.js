import axios from 'axios'
import { baseApi } from '../services/util'
export const SEARCH_USER = 'SEARCH_USER';

export const searchUser = value => async dispatch => {

  const response = await baseApi.get(`/users/%23${value}`)
  // .then(res => callback(res))
  // .catch((error) => {
  //     console.log(error);
  // })
  dispatch({ type: SEARCH_USER, response })
}
