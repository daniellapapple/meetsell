import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import ProdukTerbeli from './my-profile-produk-terbeli'

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
              <ProdukTerbeli />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default MyProfileContentProdukTerbeli