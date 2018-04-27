import React, { Component } from 'react'
import {
  Col,
  FormGroup,
  FormControl,
  Form,
  ControlLabel,
  Button
} from 'react-bootstrap'

class MyProfilePengaturan extends Component {

  render() {
    return (
      <div className="my-profile-pengaturan">
        <div className="my-profile-pengaturan-top">
          <Col md={ 6 } sm={ 6 } xs={ 4 }>
            <p className="pengaturan">PENGATURAN</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 8 } className="text-right">
            <div className="my-profile-pengaturan-bagikan">
              BAGIKAN:
              <div className="my-profile-pengaturan-social-button">
                <a href="#facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col>
        </div>
        <div className="my-profile-pengaturan-body">
          <Col md={ 3 }>
            <div className="my-profile-pengaturan-body-image-wrap">
              <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" />
              <a href="#uploadFoto">
                Upload Foto
              </a>
            </div>
          </Col>
          <Col md={ 9 }>
            <div className="my-profile-pengaturan-form">
            <Form horizontal>
              <FormGroup controlId="formHorizontalNama">
                <Col componentClass={ControlLabel} sm={3}>
                  Nama
                </Col>
                <Col sm={9}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalNotlp">
                <Col componentClass={ControlLabel} sm={3}>
                  Nomor Telepon
                </Col>
                <Col sm={9}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalAkunBank">
                <Col componentClass={ControlLabel} sm={3}>
                  Akun Bank
                </Col>
                <Col sm={9}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalLokasi">
                <Col componentClass={ControlLabel} sm={3}>
                  Lokasi
                </Col>
                <Col sm={9}>
                  <FormControl type="text" />
                </Col>
              </FormGroup>

              <p className="line-form-email"></p>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>
                  Email
                </Col>
                <Col sm={9}>
                  <FormControl type="email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>
                  Password
                </Col>
                <Col sm={9}>
                  <FormControl type="password" />
                </Col>
              </FormGroup>

              <Button className="hidden-xs visible-lg visible-md visible-sm">Simpan</Button>
              <Button className="btn-block hidden-lg hidden-md hidden-sm visible-xs">Simpan</Button>
            </Form>
            </div>
          </Col>
        </div>
      </div>
    )
  }

}

export default MyProfilePengaturan