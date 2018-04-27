import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import { Redirect } from 'react-router'
import $ from 'jquery'

import location from '../assets/image/product-item-location.png'

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

    return (
      <div className="my-profile-wishlist">
        <div className="my-profile-wishlist-top">
          <Col md={ 6 } sm={ 6 } xs={ 4 }>
            <p className="wishlist">PRODUK DIJUAL</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 8 } className="text-right">
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
          </Col>
        </div>
        <div className="my-profile-wishlist-body">
          <Col md={ 4 }>
            <div className="recommend-wrap-item" onClick={ this.goToProductItem }>
              <div className="image-item">
                <img src="https://www.bigissueshop.com/media/product/2017/10/05/845_2077_w300.jpg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 190.000</p>
                <p className="caption-description">
                  Jual kemeja Uniqlo Original Like New jarang Pake
                </p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
          <Col md={ 4 }>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="http://www.satugadget.com.my/content/images/thumbs/0008014_apple-iphone-x-64gb-space-grey-original-malaysia-set_300.jpeg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 190.000</p>
                <p className="caption-description">
                  <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                </p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
          <Col md={ 4 }>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="http://www.hawkshop.com/webitemimages/103/W41820-t.jpg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 190.000</p>
                <p className="caption-description">
                  <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                </p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
          <Col md={ 4 }>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="http://www.anneahira.com/images_wp/cara-memilih-sepeda.jpg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 190.000</p>
                <p className="caption-description">
                  <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                </p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
        </div>
      </div>
    )
  }

}

export default MyProfileProdukTerjual