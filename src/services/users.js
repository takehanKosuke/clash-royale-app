import { baseApi } from './util'

const showUser = (tagID, callback) => {
  return baseApi
    .get(`/users?${tagID}`, {})
    .then(res => callback(res.data))
    .catch((error) => {
        console.log(error);
    })
}

export { showUser }
