import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';

import { get_product_my_profile_api } from '../actions/productAction';

import Env from '../lib/env';

import location from '../assets/image/product-item-location.png';

class MyProfileProdukTerjual extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: '',
      redirect: false
    }

    this.toggleWishlist = this.toggleWishlist.bind(this)
    this.goToProductItem = this.goToProductItem.bind(this)
  }

  componentDidMount() {
    this.props.produkDijual_myProfile()
  };

  toggleWishlist(id) {
    this.setState({
      idToggle: id
    })
    setTimeout(() => {
      $(`#${ this.state.idToggle }`).toggleClass('in-wishlist')
    }, 300)
  }

  goToProductItem() {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="/clothes/id/12345678" />
    }

    console.log(this.props.produkDibeli, 'ini product dibeli')

    return (
      <div className="my-profile-wishlist">
        <div className="my-profile-wishlist-top">
          <Col md={ 12 } sm={ 12 } xs={ 12 }>
            <p className="wishlist">PRODUK DIJUAL</p>
          </Col>
          {/* <Col md={ 6 } sm={ 6 } xs={ 8 } className="text-right">
            <div className="my-profile-wishlist-bagikan">
              BAGIKAN:
              <div className="my-profile-wishlist-social-button">
                <a href="#facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col> */}
        </div>
        <div className="my-profile-wishlist-body">
          { this.props.produkDibeli.length > 0 &&
          this.props.produkDibeli[0].data.products.map((item, idx) => {
            console.log(item)
            return (
            <Col md={ 4 } key={ idx }>
              <Link to={ `/product/${localStorage.getItem('id')}/${item.id}/${item.title.split(' ').join('-').toLowerCase()}` }>
                <div className="recommend-wrap-item">
                  <div className="image-item">
                    <img src={ Env.urlS3(item.main_image_key) } alt="" className="img-responsive" />
                  </div>
                  <div className="caption-item">
                    <p className="caption-price">{ Env.formatCurrency(item.price) }</p>
                    <p className="caption-description">
                      { (item.title.length < 60) ? item.title : item.title.substr(0, 60) + '...' }
                    </p>
                    <p className="caption-location">
                      <img src={ location } width="18" alt="" />
                      Jakarta Pusat
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            )
            })
          }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    produkDibeli: state.productReducer.produkDibeli_myProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    produkDijual_myProfile: () => dispatch(get_product_my_profile_api())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileProdukTerjual);