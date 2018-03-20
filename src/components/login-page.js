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

class LoginPage extends Component {

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
              <form>
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
                <div className="login-checkbox">
                  <Col md={ 6 } sm={ 6 } xs={ 6 }>
                    <input id="box1" type="checkbox" />
                    <label htmlFor="box1">Ingat saya</label>
                  </Col>
                  <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                    <a href="#forgot-password">
                      Forgot password?
                    </a>
                  </Col>
                </div>
                <Button>
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

export default LoginPage