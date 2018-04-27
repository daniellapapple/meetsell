import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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

    if (!localStorage.getItem('qwerty')) {
      this.props.history.push('/')
    }
  }

  render() {

    return (
      <div className="my-profile">
        <Header />
        <Breadcrumb />
          <Route exact path="/my-profile" component={ Chat } />
          <Route path="/my-profile/produk-dibeli" component={ ProdukTerbeli } />
          <Route path="/my-profile/produk-dijual" component={ ProdukTerjual } />
          <Route path="/my-profile/review" component={ Review } />
          <Route path="/my-profile/chat" component={ Chat } />
          <Route path="/my-profile/wishlist" component={ Wishlist } />
          <Route path="/my-profile/pengaturan" component={ Pengaturan } />
        <Footer />
      </div>
    )
  }

}

export default withRouter(MyProfile)
// export default MyProfile