import React, { Component } from 'react'

import Forgotpassword from '../components/forgot-password-page'
import Footer from './Footer'

export default class ForgotPassword extends Component {

  render() {
    return (
      <div className="forgot-password-wrap">
        <Forgotpassword />
        <Footer />
      </div>
    )
  }

}