import axios from 'axios'

const baseApi = axios.create({
    baseURL: "http://localhost:30001/api/v1",
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
  });

export { baseApi }
