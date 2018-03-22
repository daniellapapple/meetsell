import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class ProductItemSlider extends Component {

  render() {
    return (
      <div>
        <Carousel showArrows={ false }>
          <div>
              <img src="https://basspro.scene7.com/is/image/BassPro/2269413_2269408_is?$Prod_PLPThumb$" alt="" />
          </div>
          <div>
              <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0102/20171024151632.jpg" alt="" />
          </div>
          <div>
              <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0108/20171024150159.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    )
  }

}

export default ProductItemSlider