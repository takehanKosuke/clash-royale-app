import axios from 'axios'
import { baseApi } from './util'

const indexCords = () => {
  return baseApi
    .get(`api/v1/cords`)
    .then(res => callback(res))
    .catch((error) => {
        console.log(error);
    })
}

export { showUser }
