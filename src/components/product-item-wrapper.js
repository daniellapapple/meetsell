import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import SocialMediaButton from './product-item-socmed-button'
import ProductSlider from './product-item-slider'
import Description from './product-item-description'

class ProductItemDescription extends Component {

  render() {
    return (
      <Grid>
        <div className="product-item-description">
          <Row>
            <Col md={ 6 }>
              <div className="pro-item-bagikan">
                BAGIKAN:
                <SocialMediaButton />
              </div>
              <div className="pro-item-slider">
                <ProductSlider param={ this.props.param } />
              </div>
            </Col>
            <Col md={ 6 }>
              <Description />
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default ProductItemDescription;