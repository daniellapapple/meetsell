import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Breadcrumb from '../components/my-profile-breadcrumb'
import ProdukTerbeli from '../components/my-profile-content-produk-terbeli'
import ProdukTerjual from '../components/my-profile-content-produk-terjual'
import Review from '../components/my-profile-content-review'
import Chat from '../components/my-profile-content-chat'
import Wishlist from '../components/my-profile-content-wishlist'
import Footer from './Footer'

class MyProfile extends Component {

  render() {
    return (
      <div className="my-profile">
        <Header />
        <Breadcrumb />
        <Router>
          <div>
            <Route exact path="/my-profile" component={ Chat } />
            <Route path="/my-profile/produk-terbeli" component={ ProdukTerbeli } />
            <Route path="/my-profile/produk-terjual" component={ ProdukTerjual } />
            <Route path="/my-profile/review" component={ Review } />
            <Route path="/my-profile/chat" component={ Chat } />
            <Route path="/my-profile/wishlist" component={ Wishlist } />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }

}

export default MyProfile