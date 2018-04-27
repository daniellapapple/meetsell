import React, { Component } from 'react'
import {
  Grid,
  Col
} from 'react-bootstrap'
import {
  Route
} from 'react-router'

import FLink from './faq-link'
import TentangKami from './faq-tentang-kami'
import AturanPenggunaan from './faq-aturan-penggunaan'
import PrivacyPolicy from './faq-privacy-policy'
import Pembeli from './faq-pembeli'
import Penjual from './faq-penjual'
import TataCaraPenjual from './faq-tata-cara-penjual'
import TataCaraPembeli from './faq-tata-cara-pembeli'

class FaqContent extends Component {

  render() {
    return (
      <div className="faq-content">
        <Grid>
          <Col md={ 3 }>
            <FLink />
          </Col>
          <Col md={ 9 }>
            <Route exact path="/faq" component={ TentangKami } />
            <Route path="/faq/tentang-kami" component={ TentangKami } />
            <Route path="/faq/aturan-penggunaan" component={ AturanPenggunaan } />
            <Route path="/faq/privacy-policy" component={ PrivacyPolicy } />
            <Route path="/faq/pembeli" component={ Pembeli } />
            <Route path="/faq/penjual" component={ Penjual } />
            <Route path="/faq/tata-cara-penjual" component={ TataCaraPenjual } />
            <Route path="/faq/tata-cara-pembeli" component={ TataCaraPembeli } />
          </Col>
        </Grid>
      </div>
    )
  }

}

export default FaqContent