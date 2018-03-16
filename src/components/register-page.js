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

import logo from '../assets/image/logo/logo-1.png'

class RegisterPage extends Component {

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
              <form>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="far fa-user"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Nama" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="far fa-envelope"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="fas fa-unlock"></i>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Password" />
                  </InputGroup>
                </FormGroup>
                <Button>
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
      </div>
    )
  }

}

export default RegisterPage