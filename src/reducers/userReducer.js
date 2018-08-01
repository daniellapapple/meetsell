const initialState = {
  dataUser: [],
  profileGuest: [],
  chatPenjualId: [],
  cartRemoveByUser: false,
  loginUser: null,
  logoutUser: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_USER':
      return {
        ...state,
        dataUser: state.dataUser.concat(action.payload.data)
      };
    case 'GET_DATA_GUEST':
      return {
        ...state,
        profileGuest: [action.payload.data]
        // profileGuest: state.profileGuest.concat(action.payload.data)
      }
    case 'CHAT_ID_PENJUAL':
      return {
        ...state,
        chatPenjualId: action.payload.data
      }
    case 'LOGIN':
      let resData = action.payload.data.data;
      let productCartLS = JSON.parse(localStorage.getItem('productCart') || '[]');

      if (resData) {
        let id = resData.id;
        let token = resData.token;
        let name = resData.name;
        let email = resData.email;
        let phone = resData.phone;
        let phone_code = resData.phone_code;
        let photo_key = resData.photo_key;
        let lat = resData.lat;
        let lng = resData.lng;
        let member_since = resData.member_since;

        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('phone_code', phone_code);
        localStorage.setItem('photo_key', photo_key);
        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        localStorage.setItem('member_since', member_since);
        
        let filterProductCartLS = productCartLS.filter(item => item.seller_id !== id);
        productCartLS = filterProductCartLS;
        localStorage.setItem('productCart', JSON.stringify(productCartLS));

        return {
          ...state,
          dataUser: resData,
          cartRemoveByUser: true,
          loginUser: true
        }
      }

      return {
        ...state,
        dataUser: resData
      }
    case 'LOGOUT':
      if (action.payload.data.status.code === 0) {
        localStorage.clear();

        return {
          ...state,
          logoutUser: true,
          loginUser: false
        }
      }

      return {
        ...state,
        logoutUser: false
      }
    default:
      return state
  }
}

export default reducer