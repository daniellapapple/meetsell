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
    console.log(this.props.match.params.id_user, 'dari parent')

    return (
      <div className="profile-page">
        <Header />
        <Breadcrumb />
        <Route exact path="/profiles/:id_user/:nama_user/semua-produk" component={ SemuaProduk } />
        <Route path="/profiles/:id_user/:nama_user/produk-terlaris" component={ ProdukTerlaris } />
        <Route path="/profiles/:id_user/:nama_user/review" component={ Review } />
        <Route path="/profiles/:id_user/:nama_user/laporkan" component={ Laporkan } />
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