import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Breadcrumb from '../components/detail-pesanan-breadcrumb'
import TabTitle from '../components/detail-pesanan-tab-title'
import KonfirmasiCod from '../components/konfirmasi-cod'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class Konfirmasi extends Component {

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <TabTitle />
        <KonfirmasiCod />
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