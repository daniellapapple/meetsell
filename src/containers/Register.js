import React, { Component } from 'react'

import RegisterPage from '../components/register-page'
import Footer from './Footer'

class Register extends Component {

  render() {
    return (
      <div className="register-page-wrap">
        <RegisterPage />
        <Footer />
      </div>
    )
  }

}

export default Register