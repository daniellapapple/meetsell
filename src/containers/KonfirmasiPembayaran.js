import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Breadcrumb from '../components/detail-pesanan-breadcrumb'
import TabTitle from '../components/detail-pesanan-tab-title'
import LanjutPembayaran from '../components/konfirmasi-lanjut-pembayaran'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class Konfirmasi extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <TabTitle />
        <LanjutPembayaran />
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

export default Konfirmasi