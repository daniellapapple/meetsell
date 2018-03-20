import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import Review from './my-profile-review'

class MyProfileContentReview extends Component {

  render() {
    return (
      <div className="my-profile-content-review">
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

export default MyProfileContentReview