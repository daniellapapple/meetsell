import React, { Component } from 'react'
import { connect } from 'react-redux';

import { get_product_detail_item_feed_api } from '../actions/productAction';

import Header from './Header'
import Breadcrumb from '../components/product-item-breadcrumb'
import Description from '../components/product-item-wrapper'
import Recommend from '../components/product-item-recommend'
import Footer from './Footer'

class ProductItem extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getProductFeed();
  }

  componentDidUpdate(prevProps) {
    let prevIdProduk = prevProps.match.params.id_produk;
    let id_produk = this.props.match.params.id_produk;
    if (prevIdProduk !== id_produk) {
      let page = 0;
      let objParams = {
        page: page,
        product_id: id_produk
      };
      this.props.product(objParams)
      window.scrollTo(0, 0);
    }
  };

  getProductFeed() {
    let page = 0
    let id_produk = this.props.match.params.id_produk;
    let objParams = {
      page: page,
      product_id: id_produk
    };
    this.props.product(objParams)
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
        <Description param={ objParam }/>
        { this.props.productItem.productFeed && <Recommend param={ objParam } productFeed={ this.props.productItem.productFeed } /> }
        <Footer />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    productItem: state.productReducer.productItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    product: (obj) => dispatch(get_product_detail_item_feed_api(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);