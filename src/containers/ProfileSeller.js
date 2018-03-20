import React, { Component } from 'react'
import {
  Grid
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Breadcrumb from '../components/profile-seller-breadcrumb'
import SemuaProduk from '../components/profile-seller-content-semua-produk'
import ProdukTerlaris from '../components/profile-seller-content-produk-terlaris'
import Review from '../components/profile-seller-content-review'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class Profile extends Component {

  render() {
    return (
      <div className="profile-page">
        <Header />
        <Breadcrumb />
        <Router>
          <div>
            <Route exact path="/profile-seller" component={ ProdukTerlaris } />
            <Route path="/profile-seller/semua-produk" component={ SemuaProduk } />
            <Route path="/profile-seller/produk-terlaris" component={ ProdukTerlaris } />
            <Route path="/profile-seller/review" component={ Review } />
          </div>
        </Router>
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