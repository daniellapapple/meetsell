import React, { Component } from 'react'

import Header from './Header'
import Breadcrumb from '../components/product-item-breadcrumb'
import Description from '../components/product-item-wrapper'
import Recommend from '../components/product-item-recommend'
import Footer from './Footer'

class ProductItem extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <Description />
        <Recommend />
        <Footer />
      </div>
    )
  }

}

export default ProductItem