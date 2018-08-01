import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import {
  NavLink
} from 'react-router-dom'

import Env from '../lib/env';

// import wallet from '../assets/image/wallet-teal.png'

class MyProfileInformation extends Component {

  render() {
    let member_since = localStorage.getItem('member_since').substr(0, 10)
    let d = new Date(member_since)
    let dateToStr = d.toDateString()

    return (
      <div className="my-profile-information-wrap">
        <div className="my-profile-information-header"></div>
        {/* <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" className="my-profile-information-image-header" /> */}
        { (localStorage.getItem('photo_key') !== 'null') ? <img src={ Env.urlS3(localStorage.getItem('photo_key')) } alt="" className="my-profile-information-image-header" /> : <p className="initial-name">{ Env.getInitialName(localStorage.getItem('name')) }</p> }
        {/* { imgWrap } */}
        <div className="my-profile-information-nama-wrap">
          <Col md={ 12 } sm={ 12 } xs={ 12 }>
            <p className="my-profile-information-nama">
              { localStorage.getItem('name') }
            </p>
          </Col>
        </div>
        <p className="my-profile-member-since">
          member since { dateToStr }
        </p>
        {/* <div className="my-profile-wallet">
          <img src={ wallet } alt="" width="30" />
          Rp 200.000
        </div> */}
        <div className="my-profile-information-list-link">
          <ul>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/produk-dibeli` } activeClassName="is-active">Produk Dibeli</NavLink>
            </li>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/produk-dijual` } activeClassName="is-active">Produk Dijual</NavLink>
            </li>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/review` } activeClassName="is-active">Review</NavLink>
            </li>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/chat` } activeClassName="is-active">Chat</NavLink>
            </li>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/wishlist` } activeClassName="is-active">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to={ `/profile/${localStorage.getItem('id')}/${localStorage.getItem('name')}/pengaturan` } activeClassName="is-active">Pengaturan</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default MyProfileInformation