import { SHOW_USER } from '../actions/user'

const initialState = {
  user: {},
  clan: {},
  drow: 0,
  rate: 0
}

// controller的なやつかな
export default (state = initialState, action ) => {
  console.log(state)
  switch (action.type) {
    case 'SHOW_USER':
      return { state }
    case 'SUCESS_SEARCH_USER':
      return {
        ...state,
        user: action.response.user,
        clan: action.response.user.clan,
        rate: Math.round(action.response.user.wins/action.response.user.battleCount*100),
        drow: action.response.user.battleCount - action.response.user.wins - action.response.user.losses,
      }
    default:
      return state
  }
}
