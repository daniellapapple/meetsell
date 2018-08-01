import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import Env from '../lib/env';

import location from '../assets/image/product-item-location.png'

class ProfileSellerSemuaProduk extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      product_id: 0,
      loginChanged: true
    }

    this.goToProductItem = this.goToProductItem.bind(this);
    this._toggleWishlist = this._toggleWishlist.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, 'prev props')
    console.log(this.props, 'propsssssss')
  }

  _toggleWishlist(id) {
    this.setState({
      product_id: id
    });
    setTimeout(() => {
      $(`#${this.state.product_id}`).toggleClass('in-wishlist');
    }, 150);
  };

  goToProductItem() {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { redirect, product_id, loginChanged } = this.state

    if (redirect) {
      return <Redirect to="/clothes/id/12345678" />
    }

    return (
      <div className="profile-produk-terlaris">
        <div className="profile-produk-top">
          <Col md={ 6 } sm={ 6 } xs={ 4 }>
            <p className="produk-terlaris">SEMUA PRODUK</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 8 } className="text-right">
            <div className="profile-produk-bagikan">
              BAGIKAN:
              <div className="profile-produk-social-button">
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
          </Col>
        </div>
        <div className="profile-produk-terlaris-item">
          { this.props.profileGuest.length > 0 &&
        this.props.profileGuest[0].data.data.products.map((item, idx) => {
        return (
          <Col md={ 4 } key={ idx }>
            <Link to={ `/product/${this.props.profileGuest[0].id}/${item.id}/${item.title.split(' ').join('-').toLowerCase()}` }>
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
            { loginChanged &&
            localStorage.getItem('id') !== null && <div 
              className="icon-wishlist" 
              id={ (product_id === item.id) ? product_id : item.id } onClick={ () => this._toggleWishlist(item.id) }
            >
            </div> }
          </Col> ) }) }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    profileGuest: state.userReducer.profileGuest,
    loginUser: state.userReducer.loginUser
  };
};

export default connect(mapStateToProps)(ProfileSellerSemuaProduk)