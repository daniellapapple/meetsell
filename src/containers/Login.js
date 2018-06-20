import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginPage from '../components/login-page';
import Footer from './Footer';

class Login extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)

    if (localStorage.getItem('token') !== null) {
      this.props.history.push('/')
    }
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

export default withRouter(Login);