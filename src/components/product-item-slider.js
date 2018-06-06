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
    console.log(this.props.slider, 'ini slider')

    return (
      <div>
        <Carousel
          showArrows={true}
          className="pr_slider"
        >
          { this.props.slider.map((res, idx) => {
            return (
              <div id={ `slide${idx}` }>
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