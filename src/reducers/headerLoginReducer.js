const initialState = {
  dataUser: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_USER':
      return {
        ...state,
        dataUser: state.dataUser.concat(action.payload.data)
      }
    default:
      return state
  }
}

export default reducer