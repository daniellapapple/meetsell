import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux'

import Env from '../lib/env';

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class ProductItemSlider extends Component {

  render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          className="pr_slider"
        >
          {
            this.props.productItem.productDetail &&
            (this.props.param.id_produk === this.props.productItem.productDetail.data.product_id)
            ? this.props.productItem.productDetail.data.images.map((item, idx) => {
              return <div id={ `slide${idx}` } key={ idx }>
                <img src={ Env.urlS3(item) } alt="" />
              </div>
            }) : ''
          }
        </Carousel>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    productItem: state.productReducer.productItem
  }
};

export default connect(mapStateToProps)(ProductItemSlider);