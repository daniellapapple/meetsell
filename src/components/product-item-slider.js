import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

class ProductItemSlider extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={ 12 }>
            <div className="pro-item-image-parent">
              <img src="https://dress-trends.com/wp-content/uploads/2016/11/Teen-fashion-2017-Teen-girls-clothing-trends-2017-dresses-for-teens-9.jpg" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={ 3 } sm={ 3 } xs={ 3 }>
            <div className="pro-item-image-child">
              <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0102/20171024151632.jpg" alt="" />
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } xs={ 3 }>
            <div className="pro-item-image-child">
              <img src="http://www.hippieshop.com/mas_assets/thumb/10857.jpg" alt="" />
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } xs={ 3 }>
            <div className="pro-item-image-child">
              <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0108/20171024150159.jpg" alt="" />
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } xs={ 3 }>
            <div className="pro-item-image-child">
              <img src="https://basspro.scene7.com/is/image/BassPro/2269413_2269408_is?$Prod_PLPThumb$" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    )
  }

}

export default ProductItemSlider