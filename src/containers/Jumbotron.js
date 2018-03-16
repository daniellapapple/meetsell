import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import JumboListGroupItem from '../components/jumbo-list-group-item'
import JumboSlider from '../components/jumbo-slider'

class Jumbotron extends Component {

  render() {
    return (
      <Grid>
        <div className="jumbotron-content">
          <Row>
            <Col md={ 3 } className="hidden-xs">
              <JumboListGroupItem />
            </Col>
            <Col md={ 9 } className="hidden-xs">
              <JumboSlider />
            </Col>
            <Col sm={ 12 } className="hidden-md visible-xs">
              <JumboSlider />
            </Col>
            <Col md={ 12 } className="hidden-md visible-xs">
              <JumboListGroupItem />
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default Jumbotron