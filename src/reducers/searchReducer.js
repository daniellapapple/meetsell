const initialState = {
  kategoriSearch: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEADER_SEARCH':
      return Object.assign({}, state, {
        kategoriSearch: action.payload.input
      })
    default:
      return state
  }
}

export default reducer