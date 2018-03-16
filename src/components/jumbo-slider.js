import React, { Component } from 'react'
import {
  Carousel
} from 'react-bootstrap'

import slider1 from '../assets/image/jumbotron/slider/slider-1.png'
import slider2 from '../assets/image/jumbotron/slider/slider-2.png'
import slider3 from '../assets/image/jumbotron/slider/slider-3.png'

class Jumbo_slider extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img alt="900x500" src={ slider1 } />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={ slider2 } />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={ slider3 } />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }

}

export default Jumbo_slider