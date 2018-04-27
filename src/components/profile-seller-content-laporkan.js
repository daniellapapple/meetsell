import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './profile-seller-information'
import Laporkan from './profile-seller-laporkan'

class ProfileSellerContentLaporkan extends Component {

  render() {
    return (
      <div className="profile-content">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <Laporkan />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default ProfileSellerContentLaporkan