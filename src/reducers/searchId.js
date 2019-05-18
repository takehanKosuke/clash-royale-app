const initialState = {
  searchId: '#LLG8QJUR',
}

// controller的なやつかな
export default (state = initialState, action ) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_ID':
      console.log(action.value)
      return {
        ...state,
        searchId: action.value,
      }
    default:
      return state
  }
}
