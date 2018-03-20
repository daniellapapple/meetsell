import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

import ikon from '../assets/image/jual-barang-camera.png'

class ContentFooter extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={ 3 } sm={ 3 } className="text-center">
            <div className="ikon-content-footer">
              <img src={ ikon } width="50" alt="" />
            </div>
            <div className="title-content-footer">
              <p>Jaminan 100% Aman</p>
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } className="text-center">
            <div className="ikon-content-footer">
              <img src={ ikon } width="50" alt="" />
            </div>
            <div className="title-content-footer">
              <p>Manfaat Berlebihan</p>
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } className="text-center">
            <div className="ikon-content-footer">
              <img src={ ikon } width="50" alt="" />
            </div>
            <div className="title-content-footer">
              <p>Keamanan Bertransaksi</p>
            </div>
          </Col>
          <Col md={ 3 } sm={ 3 } className="text-center">
            <div className="ikon-content-footer">
              <img src={ ikon } width="50" alt="" />
            </div>
            <div className="title-content-footer">
              <p>Variasi Barang</p>
            </div>
          </Col>
        </Row>
        <Row className="row-content-footer-caption">
          <Col md={ 12 }>
            <p className="content-footer-caption">
              Meetsell merupakan marketplace online terpercaya di Indonesia yang menjual beragam produk yang dibutuhkan seluruh masyarakat Indonesia. Seiring berkembangnya teknologi, semakin banyak aktivitas yang dilakukan secara digital, lebih mudah dan praktis, termasuk kegiatan pembelanjaan yang kini semakin marak dilakukan secara digital, baik melalui komputer, laptop, hingga smartphone yang bisa diakses kapan saja dan dimana saja. Meetsell hadir sebagai toko online terpercaya dengan sistem konsumen ke konsumen. Hal ini memungkinkan setiap orang untuk menjual dan juga membeli produk dengan mudah secara online. Saran jual beli online Meetsell memiliki visi untuk menjadi marketplace nomor satu di Indonesia dengan misi untuk memberdayakan UKM di seluruh penjuru Indonesia. Setiap orang di Indonesia dapat memasarkan produk unggulannya di Meetsell dengan membuka toko online murah dengan pilihan sistem belaja satuan dan juga grosir.
            </p>
            <p>
              Meetsell merupakan marketplace online terpercaya di Indonesia yang menjual beragam produk yang dibutuhkan seluruh masyarakat Indonesia. Seiring berkembangnya teknologi, semakin banyak aktivitas yang dilakukan secara digital, lebih mudah dan praktis, termasuk kegiatan pembelanjaan yang kini semakin marak dilakukan secara digital, baik melalui komputer, laptop, hingga smartphone yang bisa diakses kapan saja dan dimana saja. Meetsell hadir sebagai toko online terpercaya dengan sistem konsumen ke konsumen. Hal ini memungkinkan setiap orang untuk menjual dan juga membeli produk dengan mudah secara online. Saran jual beli online Meetsell memiliki visi untuk menjadi marketplace nomor satu di Indonesia dengan misi untuk memberdayakan UKM di seluruh penjuru Indonesia. Setiap orang di Indonesia dapat memasarkan produk unggulannya di Meetsell dengan membuka toko online murah dengan pilihan sistem belaja satuan dan juga grosir.
            </p>
          </Col>
        </Row>
      </div>
    )
  }

}

export default ContentFooter