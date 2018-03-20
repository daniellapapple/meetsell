import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'

import location from '../assets/image/product-item-location.png'

class ProfileSellerSemuaProduk extends Component {

  render() {
    return (
      <div className="profile-produk-terlaris">
        <div className="profile-produk-top">
          <Col md={ 6 } sm={ 6 } xs={ 6 }>
            <p className="produk-terlaris">SEMUA PRODUK</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
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
          <Col md={ 4 }>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="https://ibox.co.id/media/catalog/category/menu-iphone-6.png" alt="" className="img-responsive" />
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
                <img src="http://pusatsepedalistrik.com/wp-content/uploads/2017/05/Untitled-1-2.png" alt="" className="img-responsive" />
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
                <img src="https://i.ebayimg.com/images/g/qLgAAOSwWxNYw9JJ/s-l300.jpg" alt="" className="img-responsive" />
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
                <img src="https://www.bigissueshop.com/media/product/2017/10/05/845_2077_w300.jpg" alt="" className="img-responsive" />
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

export default ProfileSellerSemuaProduk