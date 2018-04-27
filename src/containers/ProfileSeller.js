import React, { Component } from 'react'
import {
  Grid
} from 'react-bootstrap'
import { Route } from 'react-router'

import Header from './Header'
import Breadcrumb from '../components/profile-seller-breadcrumb'
import SemuaProduk from '../components/profile-seller-content-semua-produk'
import ProdukTerlaris from '../components/profile-seller-content-produk-terlaris'
import Review from '../components/profile-seller-content-review'
import Laporkan from '../components/profile-seller-content-laporkan'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class Profile extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="profile-page">
        <Header />
        <Breadcrumb />
        <Route exact path="/profile-seller" component={ ProdukTerlaris } />
        <Route path="/profile-seller/semua-produk" component={ SemuaProduk } />
        <Route path="/profile-seller/produk-terlaris" component={ ProdukTerlaris } />
        <Route path="/profile-seller/review" component={ Review } />
        <Route path="/profile-seller/laporkan" component={ Laporkan } />
        <div className="content-footer">
          <Grid>
            <ContentFooter />
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Profile