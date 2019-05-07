import axios from 'axios'
import { baseApi } from './util'

const showClan = (tagID, callback) => {
  return baseApi
    .get(`clans?${tagID}`)
    .then(res => callback(res))
    .catch((error) => {
        console.log(error);
    })
}

export { showClan }
