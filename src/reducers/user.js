import { SEARCH_USER } from '../actions/user'
import _ from 'lodash';

// controller的なやつかな
export default (state = {}, action ) => {
  switch (action.type) {
    case 'SEARCH_USER':
      return action.response.data
    default:
      return state
  }
}
