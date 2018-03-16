import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './profile-seller-information'
import Review from './profile-seller-review'

class ProfileReview extends Component {

  render() {
    return (
      <div className="profile-review-content">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <Review />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default ProfileReview