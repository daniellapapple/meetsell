import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import {
  NavLink
} from 'react-router-dom'

import wallet from '../assets/image/wallet.png'

class MyProfileInformation extends Component {

  render() {
    return (
      <div className="my-profile-information-wrap">
        <div className="my-profile-information-header"></div>
        <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" className="my-profile-information-image-header" />
        <div className="my-profile-information-nama-wrap">
          <Col md={ 6 } sm={ 6 } xs={ 6 }>
            <p className="my-profile-information-nama">Jack Black</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
            <p className="my-profile-information-edit">
              <i className="far fa-edit"></i>
              Edit
            </p>
          </Col>
        </div>
        <p className="my-profile-member-since">
          member since 12 Maret 2018
        </p>
        <div className="my-profile-wallet">
          <img src={ wallet } alt="" width="30" />
          Rp 200.000
        </div>
        <div className="my-profile-information-list-link">
          <ul>
            <li>
              <NavLink to="/my-profile/produk-dibeli" activeClassName="is-active">Produk Dibeli</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile/produk-dijual" activeClassName="is-active">Produk Dijual</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile/review" activeClassName="is-active">Review</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile/chat" activeClassName="is-active">Chat</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile/wishlist" activeClassName="is-active">Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default MyProfileInformation