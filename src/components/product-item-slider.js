import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import $ from 'jquery'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class ProductItemSlider extends Component {

  componentDidMount() {
    if ($('.slide').hasClass('selected')) {
      $('#slide1').append(`
        <div 
          class="icon-wishlist" id="qwerty1"
        >
        </div>
      `)

      $('#slide2').append(`
        <div 
          class="icon-wishlist" id="qwerty2"
        >
        </div>
      `)

      $('#slide3').append(`
        <div 
          class="icon-wishlist" id="qwerty3"
        >
        </div>
      `)

      $('#qwerty1').on('click', function() {
        $(this).toggleClass('in-wishlist')
      })

      $('#qwerty2').on('click', function() {
        $(this).toggleClass('in-wishlist')
      })

      $('#qwerty3').on('click', function() {
        $(this).toggleClass('in-wishlist')
      })
    }
  }

  render() {
    return (
      <div>
        <Carousel showArrows={ false }>
          <div id="slide1">
            <img src="https://basspro.scene7.com/is/image/BassPro/2269413_2269408_is?$Prod_PLPThumb$" alt="" />
          </div>
          <div id="slide2">
            <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0102/20171024151632.jpg" alt="" />
          </div>
          <div id="slide3">
            <img src="https://d2ul0w83gls0j4.cloudfront.net/taxonomy/300/0108/20171024150159.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    )
  }

}

export default ProductItemSlider