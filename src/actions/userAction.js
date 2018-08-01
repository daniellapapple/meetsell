export const get_data_user = (payload) => ({
  type: 'GET_DATA_USER',
  payload: {
    data: payload
  }
})

export const get_data_guest = (payload) => ({
  type: 'GET_DATA_GUEST',
  payload: {
    data: payload
  }
})

export const chat_id_penjual = (payload) => ({
  type: 'CHAT_ID_PENJUAL',
  payload: {
    data: payload
  }
})

export const login = (payload) => ({
  type: 'LOGIN',
  payload: {
    data: payload
  }
})

export const logout = (payload) => ({
  type: 'LOGOUT',
  payload: {
    data: payload
  }
})

// request data to server

export const get_data_guest_api = (payload) => {
  return async dispatch => {
    const params = {
      guest_id: payload
    };
    let API = process.env.REACT_APP_MEET_API;

    let res = await fetch(API + 'profile/guest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let resJSON = await res.json();
    let resObj = {
      id: payload,
      data: resJSON
    };
    dispatch(get_data_guest(resObj));
  }
}

export const login_api = (payload) => {
  return async dispatch => {
    const params = {
      email: payload.email,
      password: payload.password,
      platform: 'WEB'
    };

    let API = process.env.REACT_APP_MEET_API;
    let res = await fetch(API + 'login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let resJSON = await res.json();
    dispatch(login(resJSON));
  }
}

export const logout_api = (payload) => {
  return async dispatch => {
    let token = localStorage.getItem('token');
    const params = {
      token: token
    }
     let API = process.env.REACT_APP_MEET_API;
     let res = await fetch(API + 'logout', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(params)
     })
     let resJSON = await res.json();
     dispatch(logout(resJSON));
  }
}