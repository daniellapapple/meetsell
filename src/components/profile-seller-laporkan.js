import React, { Component } from 'react'
import {
  Col,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

class ProfileSellerLaporkan extends Component {

  render() {
    return (
      <div className="profile-seller-laporkan">
        <div className="profile-produk-top">
          <Col md={ 6 } sm={ 6 } xs={ 4 }>
            <p className="produk-terlaris">LAPORKAN</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 8 } className="text-right">
            <div className="profile-produk-bagikan">
              BAGIKAN:
              <div className="profile-produk-social-button">
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
        <div className="profile-seller-content-body">
          <div className="profile-seller-content-faq">
            <p> - Laporkan Penjual yang merugikan Anda.</p>
            <p> - Ceritakan alasan Anda kenapa melaporkan Penjual. </p>
            <p> - Kami sangat mengapresiasi kejujuran Anda. </p>
          </div>
          <div className="profile-seller-content-form text-right">
            <FormGroup controlId="formControlsTextarea">
              <FormControl componentClass="textarea" rows={ 6 } />
            </FormGroup>
            <Button className="btn-laporkan">Laporkan</Button>
          </div>
        </div>
      </div>
    )
  }

}

export default ProfileSellerLaporkan