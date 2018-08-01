import React, { Component } from 'react'
import {
  Route
} from 'react-router'

import Header from './Header'
import Breadcrumb from '../components/my-profile-breadcrumb'
import ProdukTerbeli from '../components/my-profile-content-produk-terbeli'
import ProdukTerjual from '../components/my-profile-content-produk-terjual'
import Review from '../components/my-profile-content-review'
import Chat from '../components/my-profile-content-chat'
import Wishlist from '../components/my-profile-content-wishlist'
import Pengaturan from '../components/my-profile-content-pengaturan'
import Footer from './Footer'

class MyProfile extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div className="my-profile">
        <Header />
        <Breadcrumb />
          <Route exact path="/profile/:id_user/:nama_user/chat" component={ Chat } />
          <Route path="/profile/:id_user/:nama_user/produk-dibeli" component={ ProdukTerbeli } />
          <Route path="/profile/:id_user/:nama_user/produk-dijual" component={ ProdukTerjual } />
          <Route path="/profile/:id_user/:nama_user/review" component={ Review } />
          <Route path="/profile/:id_user/:nama_user/chat" component={ Chat } />
          <Route path="/profile/:id_user/:nama_user/wishlist" component={ Wishlist } />
          <Route path="/profile/:id_user/:nama_user/pengaturan" component={ Pengaturan } />
        <Footer />
      </div>
    )
  }

}

export default MyProfile