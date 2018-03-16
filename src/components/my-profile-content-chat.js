import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Information from './my-profile-information'
import Chat from './my-profile-chat'

class MyProfileContent extends Component {

  render() {
    return (
      <div className="my-profile-content-chat">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <Chat />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default MyProfileContent