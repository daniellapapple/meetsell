export default class UserService {

  SIGNUP_WITH_DEFAULT = 'DEFAULT';
  SIGNUP_WITH_FACEBOOK = 'FACEBOOK';
  SIGNUP_WITH_GOOGLE = 'GOOGLE'

  static async signUp(name, email, password, onSuccess, onFail) {
    try {
      const params = {
        name: name,
        email: email.toLowerCase(),
        password: password,
        platform: 'WEB'
      }
      let API = process.env.REACT_APP_MEET_API

      let response = await fetch(API + 'signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      let resJSON = await response.json()
      onSuccess(resJSON)
    } catch(error) {
      onFail(error)
    }
  }

  static async login(email, password, onSuccess, onFail) {
    try {
      const params = {
        email: email.toLowerCase(),
        password: password,
        platform: 'WEB'
      }
      let API = process.env.REACT_APP_MEET_API

      let response = await fetch(API + 'login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      let resJSON = await response.json()
      onSuccess(resJSON)
    } catch(error) {
      onFail(error)
    }
  }

  static async logout(onFail, onSuccess) {
    try {
      let token = localStorage.getItem('token')
      const params = {
        token: token
      }
      let API = process.env.REACT_APP_MEET_API

      let response = await fetch(API + 'logout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      let resJSON = await response.json()
      onSuccess(resJSON)
    } catch(error) {
      onFail(error)
    }
  }

  static async getProfileGuest(guestId, onFail, onSuccess) {
    try {
      let params = {
        guest_id: guestId
      };

      let API = process.env.REACT_APP_MEET_API;
      let res = await fetch(API + 'profile/guest', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      let resJSON = await res.json();
      onSuccess(resJSON);
    } catch(error) {
      onFail(error)
    };
  };

};