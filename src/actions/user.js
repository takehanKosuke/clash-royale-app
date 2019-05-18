import { baseApi } from '../services/util'
export const SHOW_USER = 'SHOW_USER';
export const GET_USER = 'GET_USER';
export const NOT_FOUND_USER = 'NOT_FOUND_USER';


// 本当はsearchUserとかにしたいけど一旦はshowUserで
export const showUser = id => {
  return dispatch => {
    if (id){
      id = id.replace('#', '%23');
    } else {
      id = '%23LLG8QJUR';
    }
    baseApi.get(`/users`,{
      params: {
        ID: id
      }
    })
      .then(res => dispatch(getUser(res)))
      .catch(dispatch(notFoundUser()))
  };
}

export const getUser = json => ({
  type: GET_USER,
  response: json.data
});

export const notFoundUser = () => ({
  type: NOT_FOUND_USER
})
