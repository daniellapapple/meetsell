import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './profile-seller-information'
import ProdukTerlaris from './profile-seller-produk-terlaris'

class ProfileContent extends Component {

  render() {
    return (
      <div className="profile-content">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <ProdukTerlaris />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default ProfileContent