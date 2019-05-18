import {
  NOT_FOUND_USER,
  SHOW_USER,
  GET_USER
 } from '../actions/user'

const initialState = {
  user: {},
  // clan: {},
  // drow: 0,
  // rate: 0
}

// controller的なやつかな
export default (state = initialState, action ) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.response,
        // clan: action.response.clan,
        // rate: Math.round(action.response.wins/action.response.battleCount*100),
        // drow: action.response.battleCount - action.response.wins - action.response.losses,
      }
    case 'NOT_FOUND_USER':
      return { state }
    default:
      return state
  }
}
