import React, { Component } from 'react'
import {
  Grid
} from 'react-bootstrap'

import Header from './Header'
import Breadcrumb from '../components/detail-pesanan-breadcrumb'
import TabTitle from '../components/detail-pesanan-tab-title'
import Description from '../components/detail-pesanan-description'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class DetailPesanan extends Component {

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <TabTitle />
        <Description />
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

export default DetailPesanan