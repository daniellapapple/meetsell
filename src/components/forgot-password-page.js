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

import logo from '../assets/image/logo/logo-1.png'

class ForgotPasswordPage extends Component {

  render() {
    return (
      <div className="forgot-password-page">
        <Grid>
          <Row>
            <Col md={ 12 } className="text-center">
              <p>
                <Link to="/">
                  <img src={ logo } alt="" width="250" />
                </Link>
              </p>
              <p className="forgot-password-caption">
                Lupa kata sandi? Masukkan email login Anda di bawah ini.
              </p>
              <p className="forgot-password-caption">
                Kami akan mengirimkan pesan email beserta tautan untuk reset kata sandi Anda.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={ 3 }></Col>
            <Col md={ 6 }>
              <p className="forgot-password-form-label text-center">
                Masukan email Anda
              </p>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="far fa-envelope"></i>
                  </InputGroup.Addon>
                  <FormControl type="text" />
                </InputGroup>
              </FormGroup>
              <Button className="btn-block">Ganti Password</Button>
            </Col>
            <Col md={ 3 }></Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default ForgotPasswordPage