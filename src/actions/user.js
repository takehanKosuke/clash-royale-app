import { baseApi } from '../services/util'
export const SHOW_USER = 'SHOW_USER';

export const showUser = id => async dispatch => {
  const response = await baseApi.get(`/users/${id}`)
  // .then(res => callback(res))
  // .catch((error) => {
  //     console.log(error);
  // })
  dispatch({ type: SHOW_USER, response })
}
