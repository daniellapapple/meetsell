import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class ProductItemSlider extends Component {

  render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          className="pr_slider"
        >
          { this.props.slider.map((res, idx) => {
            return (
              <div id={ `slide${idx}` } key={idx}>
                <img src={ `https://s3-ap-southeast-1.amazonaws.com/meetsell-d/${res}` } key={idx} alt="" />
              </div>
            )
          }) }
        </Carousel>
      </div>
    )
  }

}

export default ProductItemSlider