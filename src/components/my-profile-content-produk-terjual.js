import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import ProdukTerjual from './my-profile-produk-terjual'

class MyProfileContentProdukTerjual extends Component {

  render() {
    return (
      <div className="my-profile-content-produk-terjual">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <ProdukTerjual />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default MyProfileContentProdukTerjual