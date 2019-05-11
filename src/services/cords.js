import axios from 'axios'
import { baseApi } from './util'

const indexCords = () => {
  return baseApi
    .get(`/cords`)
    .then(res => callback(res))
    .catch((error) => {
        console.log(error);
    })
}

export { showUser }
