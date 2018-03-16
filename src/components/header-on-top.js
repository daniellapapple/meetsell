import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

class Header_on_top extends Component {

  render() {
    return (
      <div className="header-on-top text-right hidden-xs hidden-lg">
        <Grid>
          <Row>
            <Col md={ 12 }>
              <a href="#login" className="header-login">Login</a>|
              <a href="#register" className="header-register">Register</a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Header_on_top