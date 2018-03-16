import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import Wishlist from './my-profile-wishlist'

class MyProfileContentWishlist extends Component {

  render() {
    return (
      <div className="my-profile-content-wishlist">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <Wishlist />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default MyProfileContentWishlist