import React, { Component } from 'react'

import Header from './Header'
import Breadcrumb from '../components/jual-barang-breadcrumb'
import Content from '../components/jual-barang-content'
import Footer from './Footer'

class JualBarang extends Component {

  render() {
    return (
      <div className="jual-barang-page-wrap">
        <Header />
        <Breadcrumb />
        <Content />
        <Footer />
      </div>
    )
  }

}

export default JualBarang