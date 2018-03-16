import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'

import check from '../assets/image/product-item-check.png'
import warning from '../assets/image/detail-pesanan-warning.png'

class DetailPesananDescription extends Component {

  render() {
    return (
      <Grid>
        <div className="detail-pesanan-description">
          <Row>
            <Col md={ 9 }>
              <div className="detail-pesanan-wrap">
                <Row>
                  <div className="detail-pesanan-wrap-title">
                    <Col md={ 2 }>
                      <div className="detail-pesanan-wrap-gambar">
                        <img src="https://www.bigissueshop.com/media/product/2017/10/05/845_2077_w300.jpg" alt="" />
                      </div>
                    </Col>
                    <Col md={ 10 }>
                      <p className="detail-pesanan-nama">
                        Tatjana Shapira Online
                        <img src={ check } width="25" alt="" />
                      </p>
                      <p className="detail-pesanan-title">
                        Jual kemeja Uniqlo Original Like New jarang Pake
                      </p>
                      <p className="detail-pesanan-harga">
                        Rp 190.000
                      </p>
                      <p className="detail-pesanan-ubah">
                        <i className="far fa-edit"></i>
                        Ubah
                      </p>
                    </Col>
                    <hr />
                  </div>
                </Row>
                <Row>
                  <div className="detail-pesanan-alamat">
                    <Col md={ 12 }>
                      <p className="detail-pesanan-alamat-pengiriman">ALAMAT PENGIRIMAN</p>
                      <p className="nama-detail-pesanan">Khaleesi</p>
                      <p className="alamat-detail-pesanan">Magna Digital Lab, Wisma Korindo lt.3 Jln. MT Haryono, Pancoran Jakarta Selatan, Jakarta 12780 082227687687</p>
                      <p className="ubah-detail-pesanan">
                        <i className="far fa-edit"></i>
                        Ubah
                      </p>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="detail-pesanan-alamat-lain">
                    <Col md={ 8 } sm={ 8 } xs={ 8 }>
                      <p>Kirim ke alamat lain</p>
                    </Col>
                    <Col md={ 4 } sm={ 4 } xs={ 4 } className="text-right">
                      <i className="fas fa-angle-right"></i>
                    </Col>
                  </div>
                </Row>
              </div>
            </Col>
            <Col md={ 3 }>
              <div className="detail-pesanan-ringkasan-wrap">
                <Row>
                  <Col md={ 12 }>
                    <p className="detail-pesanan-ringkasan-harga">Ringkasan harga</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 }>
                    <p className="detail-pesanan-harga-barang">Harga Barang</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 }>
                    <p className="detail-pesanan-rp-harga-barang">Rp 190.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 }>
                    <p className="detail-pesanan-biaya-admin">Biaya Admin</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 }>
                    <p className="detail-pesanan-rp-biaya-admin">Rp 0</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 }>
                    <p className="detail-pesanan-biaya-safe">Biaya Safe Pay</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 }>
                    <p className="detail-pesanan-rp-biaya-safe">Rp 10.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 }>
                    <p className="detail-pesanan-total">Total</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 }>
                    <p className="detail-pesanan-rp-total">Rp 200.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 12 }>
                    <div className="detail-pesanan-warning-wrap">
                      <Col md={ 2 } sm={ 2 } xs={ 2 }>
                        <img src={ warning } alt="" width="25" />
                      </Col>
                      <Col md={ 10 } sm={ 10 } xs={ 10 }>
                        <p>By ordering with SafePay you are agree to the terms and condition</p>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 12 }>
                    <Button className="btn-block">Lanjut Pembayaran</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default DetailPesananDescription