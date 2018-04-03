import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  Checkbox,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class KeranjangBelanjaContent extends Component {

  constructor(props) {
    super(props)

    this.goToDetailPesanan = this.goToDetailPesanan.bind(this)
  }

  goToDetailPesanan() {
    this.props.history.push('/detail-pesanan')
  }

  render() {
    return (
      <div className="keranjang-belanja-content">
        <Grid>
          <Row>
            <Col md={ 12 }>
              <p className="keranjang-belanja-title">Keranjang Belanja</p>
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
              <div className="keranjang-belanja-wrap-item">
                <div className="keranjang-belanja-wrap-item-header-title">
                  <Col md={ 6 } sm={ 6 } xs={ 6 }>
                    <p className="keranjang-belanja-seller-name">Tatjana Shapira Online</p>
                  </Col>
                  <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                    <i className="fas fa-trash-alt"></i>
                  </Col>
                </div>
                <div className="keranjang-belanja-wrap-item-body">
                  <Col md={ 1 } sm={ 1 } className="text-center">
                    <FormGroup>
                      <Checkbox></Checkbox>
                    </FormGroup>
                  </Col>
                  <Col md={ 9 }>
                    <Col md={ 2 }>
                      <div className="keranjang-belanja-wrap-image-item">
                        <img src="https://s0.bukalapak.com/img/5832089302/w-300/UNIQLO___KEMEJA_FLANNEL_KOTAK_LENGAN_PANJANG.jpg" alt="" />
                      </div>
                    </Col>
                    <Col md={ 10 }>
                      <p className="keranjang-belanja-seller-small-name">Tatjana Shapira Online</p>
                      <p className="keranjang-belanja-title-item">
                        Jual kemeja Uniqlo Original Like New jarang Pake
                      </p>
                    </Col>
                  </Col>
                  <Col md={ 2 }>
                    <p className="keranjang-belanja-harga">
                      Rp 190.000
                    </p>
                  </Col>
                  <Col md={ 12 }>
                    <p className="keranjang-belanja-garis"></p>
                  </Col>
                </div>
                <div className="keranjang-belanja-wrap-item-body">
                  <Col md={ 1 } sm={ 1 } className="text-center">
                    <FormGroup>
                      <Checkbox></Checkbox>
                    </FormGroup>
                  </Col>
                  <Col md={ 9 }>
                    <Col md={ 2 }>
                      <div className="keranjang-belanja-wrap-image-item">
                        <img src="https://s0.bukalapak.com/img/5832089302/w-300/UNIQLO___KEMEJA_FLANNEL_KOTAK_LENGAN_PANJANG.jpg" alt="" />
                      </div>
                    </Col>
                    <Col md={ 10 }>
                      <p className="keranjang-belanja-seller-small-name">Tatjana Shapira Online</p>
                      <p className="keranjang-belanja-title-item">
                        Jual kemeja Uniqlo Original Like New jarang Pake
                      </p>
                    </Col>
                  </Col>
                  <Col md={ 2 }>
                    <p className="keranjang-belanja-harga">
                      Rp 190.000
                    </p>
                  </Col>
                  <Col md={ 12 }>
                    <p className="keranjang-belanja-garis"></p>
                  </Col>
                </div>
                <div className="keranjang-belanja-wrap-item-body keranjang-belanja-wrap-item-footer">
                  <Col md={ 8 }>
                    <p className="keranjang-belanja-subtotal">
                      Subtotal: <span>Rp 390.000</span>
                    </p>
                    <p className="keranjang-belanja-terms">
                      Belum termasuk ongkos kirim
                    </p>
                  </Col>
                  <Col md={ 4 } className="text-right">
                    <Button className="btn-block" onClick={ this.goToDetailPesanan }>Bayar</Button>
                  </Col>
                  <Col md={ 12 }>
                    <p className="keranjang-belanja-garis"></p>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default withRouter(KeranjangBelanjaContent)