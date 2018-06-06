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
    let objParam = {
      id_user: this.props.match.params.id_user,
      id_produk: this.props.match.params.id_produk,
      nama_produk: this.props.match.params.nama_produk
    };

    return (
      <div>
        <Header />
        <Breadcrumb />
        <Description param={ objParam } />
        <Recommend />
        <Footer />
      </div>
    )
  }

}

export default ProductItem