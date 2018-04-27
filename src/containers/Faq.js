import React, { Component } from 'react'
import {
  Grid
} from 'react-bootstrap'

import Header from './Header'
import Breadcrumb from '../components/faq-breadcrumb'
import Content from '../components/faq-content'
import ContentFooter from '../components/content-footer'
import Footer from './Footer'

class Faq extends Component {

  render() {
    return (
      <div className="faq">
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

export default Faq