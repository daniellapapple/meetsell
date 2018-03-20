import React, { Component } from 'react'

import LoginPage from '../components/login-page'
import Footer from './Footer'

class Login extends Component {

  render() {
    return (
      <div className="login-page-wrap">
        <LoginPage />
        <Footer />
      </div>
    )
  }

}

export default Login