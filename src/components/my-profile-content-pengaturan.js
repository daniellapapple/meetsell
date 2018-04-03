import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import Pengaturan from './my-profile-pengaturan'

class MyProfileContentProdukTerbeli extends Component {

  render() {
    return (
      <div className="my-profile-content-produk-terbeli">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <Pengaturan />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default MyProfileContentProdukTerbeli