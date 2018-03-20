import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './profile-seller-information'
import SemuaProduk from './profile-seller-semua-produk'

class ProfileSellerContentSemuaProduk extends Component {

  render() {
    return (
      <div className="profile-seller-content-semua-produk">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <SemuaProduk />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default ProfileSellerContentSemuaProduk