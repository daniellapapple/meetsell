import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import UserService from '../lib/user-service'

import { get_data_user } from '../actions/userAction'

import logo from '../assets/image/logo/logo-1.png'

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      emailInputan: '',
      emailValidation: '',
      emailInputStatus: false,
      passwordInputan: '',
      passwordValidation: '',
      wrongInputanLogin: ''
    }

    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps, '===============')
  // };

  handleInputEmail(e) {
    let valueEmail = e.target.value
    let validateEmail = (email) => {
      let reg = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email)
    }
    this.setState({
      emailInputan: valueEmail
    })
    if (!validateEmail(valueEmail)) {
      this.setState({
        emailValidation: 'Harap masukkan format email yang benar!',
        emailInputStatus: false
      })
    } else if (valueEmail.length === 0) {
      this.setState({
        emailValidation: 'Email harus di isi!',
        emailInputStatus: false
      })
    } else {
      this.setState({
        emailValidation: '',
        emailInputStatus: true
      })
    }
  }

  handleInputPassword(e) {
    let valuePassword = e.target.value
    this.setState({
      passwordInputan: valuePassword
    })
    if (valuePassword.length > 0) {
      this.setState({
        passwordValidation: ''
      })
    }
  }

  async handleSubmitLogin(e) {
    e.preventDefault()
    let email = this.state.emailInputan
    let password = this.state.passwordInputan

    if (this.state.emailInputStatus) {
      var button = document.querySelector('#loadButton')
      button.classList.add('load')
      setTimeout(async () => {
        UserService.login(email, password, (res) => {
          console.log(res, 'ini result')
          if (res.data === null) {
            this.setState({
              wrongInputanLogin: 'Email/Password Anda masukkan salah!'
            })
            button.classList.remove('load')
          } else {
            let id = res.data.id
            let token = res.data.token
            let name = res.data.name
            let email = res.data.email
            let phone = res.data.phone
            let phone_code = res.data.phone_code
            let photo_key = res.data.photo_key
            let lat = res.data.lat
            let lng = res.data.lng
            let member_since = res.data.member_since

            localStorage.setItem('id', id)
            localStorage.setItem('token', token)
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('phone', phone)
            localStorage.setItem('phone_code', phone_code)
            localStorage.setItem('photo_key', photo_key)
            localStorage.setItem('lat', lat)
            localStorage.setItem('lng', lng)
            localStorage.setItem('member_since', member_since)
            this.props.get_data_user(res.data)
            if (this.props.location.state !== undefined) {
              this.props.history.push('/jual-barang');
            } else {
              this.props.history.push('/');
            };
          }
        }, (error) => {
          console.log(error)
        })
      }, 1500)
    } else {
      this.setState({
        emailValidation: 'Email harus di isi!',
        passwordValidation: 'Password harus di isi!'
      })
    }
  }

  render() {
    return (
      <div className="register-page">
        <Grid>
          <Row>
            <Col md={ 12 } className="text-center">
              <Link to="/">
                <p>
                  <img src={ logo } alt="" width="250" />
                </p>
              </Link>
              <p className="register-daftar-baru">
                MASUK KE MEETSELL
              </p>
              <p className="register-already-an-account">
                Don't have an account? Sign up
                <Link to="/register">here</Link>
              </p>
            </Col>
          </Row>
          <Row className="row-form-register">
            <Col md={ 1 }></Col>
            <Col md={ 4 }>
              <p className="title-login">Login</p>
              <p className="login-wrong-inputan">{ this.state.wrongInputanLogin }</p>
              <form onSubmit={ this.handleSubmitLogin }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="far fa-envelope"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Email" onChange={ this.handleInputEmail } />
                  </InputGroup>
                  <p className="login-input-validation">{ this.state.emailValidation }</p>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="fas fa-unlock"></i>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Password" onChange={ this.handleInputPassword } />
                  </InputGroup>
                  <p className="login-input-validation">{ this.state.passwordValidation }</p>
                </FormGroup>
                <div className="login-checkbox">
                  <Col md={ 6 } sm={ 6 } xs={ 6 }>
                    <input id="box1" type="checkbox" />
                    <label htmlFor="box1">Ingat saya</label>
                  </Col>
                  <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </Col>
                </div>
                <Button type="submit" id="loadButton" onClick={ this.handleSubmitLogin }>
                  Masuk
                </Button>
              </form>
            </Col>
            <Col md={ 2 } className="line-register hidden-sm hidden-xs">
              <p className="text-center">or</p>
            </Col>
            <Col md={ 4 }>
              <div className="register-social-button">
                <a href="#register-facebook">
                  <p className="register-facebook">
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                  </p>
                </a>
                <a href="#register-google">
                  <p className="register-google">
                    <i className="fab fa-google"></i>
                    Google
                  </p>
                </a>
              </div>
            </Col>
            <Col md={ 1 }></Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    get_data_user: (data) => dispatch(get_data_user(data))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginPage))