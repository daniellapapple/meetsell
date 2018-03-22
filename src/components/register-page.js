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
import {
  Link
} from 'react-router-dom'
import {
  withRouter
} from 'react-router-dom'

import logo from '../assets/image/logo/logo-1.png'

import ModalSuccess from './register-success-modal'

class RegisterPage extends Component {

  constructor() {
    super()

    this.state = {
      namaInputan: '',
      namaValidation: '',
      namaInputStatus: false,
      emailInputan: '',
      emailValidation: '',
      emailInputStatus: false,
      passwordInputan: '',
      passwordValidation: '',
      passwordInputStatus: false,
      showModal: false
    }

    this.handleInputNama = this.handleInputNama.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleHideModal = this.handleHideModal.bind(this)
  }

  handleInputNama(e) {
    let valueNama = e.target.value
    this.setState({
      namaInputan: e.target.value
    })
    if (valueNama.length > 20) {
      this.setState({
        namaValidation: 'Nama maksimal 20 karakter!'
      })
    } else if (valueNama.length === 0) {
      this.setState({
        namaValidation: 'Nama harus di isi!'
      })
    } else {
      this.setState({
        namaValidation: '',
        namaInputStatus: true
      })
    }
  }

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
        emailValidation: 'Harap masukkan format email yang benar!'
      })
    } else if (valueEmail.length === 0) {
      this.setState({
        emailValidation: 'Email harus di isi!'
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
    if (valuePassword.length < 6) {
      this.setState({
        passwordValidation: 'Password minimal 6 karakter!'
      })
    } else if (valuePassword.length === 0) {
      this.setState({
        passwordValidation: 'Password harus di isi!'
      })
    } else {
      this.setState({
        passwordValidation: '',
        passwordInputStatus: true
      })
    }
  }

  async handleSubmitRegister(e) {
    e.preventDefault()
    if (this.state.namaInputan === '' && this.state.emailInputan === '' && this.state.passwordInputan === '') {
      this.setState({
        namaValidation: 'Nama harus di isi!',
        emailValidation: 'Email harus di isi!',
        passwordValidation: 'Password harus di isi!'
      })
    } else if (this.state.namaInputStatus === true && this.state.emailInputStatus === true && this.state.passwordInputStatus === true) {
     let response = await fetch(process.env.REACT_APP_MEET_API + 'signup', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': this.state.namaInputan,
          'email': this.state.emailInputan,
          'password': this.state.passwordInputan,
          'signup_method': 'default'
        })
      });
      let responseJson = await response.json();
      // console.log(responseJson.data)
      console.log(responseJson.status.message)
      this.handleShowModal()
    }
  }

  handleShowModal() {
    this.setState({
      showModal: true
    })
  }

  handleHideModal() {
    this.setState({
      showModal: false
    })
    this.props.history.push('/login')
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
                DAFTAR AKUN BARU SEKARANG
              </p>
              <p className="register-already-an-account">
                Already have an account? Sign in
                <Link to="/login">here</Link>
              </p>
            </Col>
          </Row>
          <Row className="row-form-register">
            <Col md={ 1 }></Col>
            <Col md={ 4 }>
              <p className="title-register">Register</p>
              <form onSubmit={ this.handleSubmitRegister }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="far fa-user"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Nama" onChange={ this.handleInputNama } />
                  </InputGroup>
                  <p className="register-input-validation">{ this.state.namaValidation }</p>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="far fa-envelope"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Email" onChange={ this.handleInputEmail } />
                  </InputGroup>
                  <p className="register-input-validation">{ this.state.emailValidation }</p>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="fas fa-unlock"></i>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Password" onChange={ this.handleInputPassword } />
                  </InputGroup>
                  <p className="register-input-validation">{ this.state.passwordValidation }</p>
                </FormGroup>
                <Button type="submit">
                  Daftar
                </Button>
              </form>
              <p className="register-terms">
                By clicking Register Account, I confirm I have agreed to Terms & Condition, and Security Privacy of MeetSell.
              </p>
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
        <ModalSuccess
          showModal={ this.state.showModal }
          hideModal={ this.handleHideModal }
          emailUser={ this.state.emailInputan }
        />
      </div>
    )
  }

}

export default withRouter(RegisterPage)