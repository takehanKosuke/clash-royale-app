import {
  NOT_FOUND_USER,
  SHOW_USER,
  GET_USER
 } from '../actions/user'

const initialState = {
  user: {},
}

// controller的なやつかな
export default (state = initialState, action ) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.response,
      }
    case 'NOT_FOUND_USER':
      return { state }
    default:
      return state
  }
}
