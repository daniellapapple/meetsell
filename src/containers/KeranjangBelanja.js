import React, { Component } from 'react'
import {
  Grid
} from 'react-bootstrap'

import Header from './Header'
import Breadcrumb from '../components/keranjang-belanja-breadcrumb'
import Content from '../components/keranjang-belanja-content'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class KeranjangBelanja extends Component {

  render() {
    return (
      <div className="keranjang-belanja-page">
        <Header />
        <Breadcrumb />
        <Content />
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

export default KeranjangBelanja