import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import logo from '../assets/image/logo/logo-1.1.png'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col md={ 4 }>
              <img src={ logo } width="200" className="footer-logo" alt="" />
            </Col>
            <Col md={ 3 } sm={ 4 } xs={ 4 }>
              <p>MEETSELL</p>
              <ul>
                <li>
                  <a href="#tentang-kami">Tentang Kami</a>
                </li>
                <li>
                  <a href="#privasi-policy">Privasi Policy</a>
                </li>
                <li>
                  <a href="#aturan-penggunaan">Aturan penggunaan</a>
                </li>
              </ul>
            </Col>
            <Col md={ 3 } sm={ 4 } xs={ 4 }>
              <p>BANTUAN</p>
              <ul>
                <li>
                  <a href="#pembeli">Pembeli</a>
                </li>
                <li>
                  <a href="#penjual">Penjual</a>
                </li>
                <li>
                  <a href="#tata-cara-penjual">Tata cara Penjual</a>
                </li>
                <li>
                  <a href="#tata-cara-pembeli">Tata cara Pembeli</a>
                </li>
              </ul>
            </Col>
            <Col md={ 2 } sm={ 4 } xs={ 4 }>
              <p className="footer-download">Download aplikasi:</p>
              <p>
                <a href="#google-play">
                  <img src="https://vignette.wikia.nocookie.net/logopedia/images/b/b9/Get-it-on-Google-Play.png/revision/latest?cb=20150704202355" width="100" alt="" />
                </a>
              </p>
              <p>
                <a href="#app-store">
                  <img src="https://vignette.wikia.nocookie.net/call-of-mini-infinity/images/6/64/Ec6a786d_available-on-iphone-app-store-logo.png/revision/latest?cb=20150705143812" width="100" alt="" />
                </a>
              </p>
            </Col>
          </Row>
          <Row className="footer-hakCipta">
            <Col md={ 6 }>
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
            </Col>
            <Col md={ 6 }>
              <p>
                &copy; 2017 Hak Cipta Terpelihara PT Magna Digital Lab
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Footer