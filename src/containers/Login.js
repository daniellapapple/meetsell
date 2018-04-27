import React, { Component } from 'react'

import LoginPage from '../components/login-page'
import Footer from './Footer'

class Login extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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