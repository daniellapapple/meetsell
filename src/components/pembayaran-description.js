import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router'
import $ from 'jquery'

import warning from '../assets/image/detail-pesanan-warning.png'
import bca from '../assets/image/pembayaran/bank-bca.png'
import mandiri from '../assets/image/pembayaran/bank-mandiri.png'
import bri from '../assets/image/pembayaran/bank-bri.png'

class DetailPesananDescription extends Component {

  constructor() {
    super()

    this.state = {
      tfVal: '',
      saldoVal: '',
      bcaState: false,
      mandiriState: false,
      briState: false
    }

    this.handleTfValue = this.handleTfValue.bind(this)
    this.handleSaldoValue = this.handleSaldoValue.bind(this)
    this.toggleBcaState = this.toggleBcaState.bind(this)
    this.toggleMandiriState = this.toggleMandiriState.bind(this)
    this.toggleBriState = this.toggleBriState.bind(this)
    this.goToKonfirmasiPembayaran = this.goToKonfirmasiPembayaran.bind(this)
  }

  handleTfValue(e) {
    this.setState({
      tfVal: e.target.value
    })
    setTimeout(() => {
      if (this.state.tfVal === 'transferBank') {
        this.showExpand()
      }
    }, 200)
  }

  handleSaldoValue(e) {
    this.setState({
      saldoVal: e.target.value
    })
    setTimeout(() => {
      if (this.state.saldoVal === 'saldoDompet') {
        this.hideExpand()
      }
    }, 200)
  }

  showExpand() {
    $('#metode-pembayaran-tf-bank').slideDown()
  }

  hideExpand() {
    $('#metode-pembayaran-tf-bank').slideUp()
  }

  toggleBcaState() {
    this.setState({
      bcaState: !this.state.bcaState
    })
    setTimeout(() => {
      if (this.state.bcaState) {
        this.showExpandHowBca()
      } else {
        this.hideExpandHowBca()
      }
    }, 200);
  }

  showExpandHowBca() {
    $('#info-metode-bank-bca').fadeIn()
  }

  hideExpandHowBca() {
    $('#info-metode-bank-bca').fadeOut()
  }

  toggleMandiriState() {
    this.setState({
      mandiriState: !this.state.mandiriState
    })
    setTimeout(() => {
      if (this.state.mandiriState) {
        this.showExpandHowMandiri()
      } else {
        this.hideExpandHowMandiri()
      }
    }, 200);
  }

  showExpandHowMandiri() {
    $('#info-metode-bank-mandiri').fadeIn()
  }

  hideExpandHowMandiri() {
    $('#info-metode-bank-mandiri').fadeOut()
  }

  toggleBriState() {
    this.setState({
      briState: !this.state.briState
    })
    setTimeout(() => {
      if (this.state.briState) {
        this.showExpandHowBri()
      } else {
        this.hideExpandHowBri()
      }
    }, 200);
  }

  showExpandHowBri() {
    $('#info-metode-bank-bri').fadeIn()
  }

  hideExpandHowBri() {
    $('#info-metode-bank-bri').fadeOut()
  }

  goToKonfirmasiPembayaran() {
    this.props.history.push('/konfirmasi-pembayaran')
  }

  render() {
    return (
      <Grid>
        <div className="detail-pesanan-description">
          <Row>
            <Col md={ 9 }>
              <div className="pembayaran-description-wrap">
                <div className="detail-pesanan-wrap-title">
                  <p>Pilih metode pembayaran</p>
                </div>
                <div className="pembayaran-metode-pembayaran-saldo-dompet">
                  <input type="radio" id="s-option" name="selector" value="saldoDompet" onChange={ this.handleSaldoValue } />
                  <label htmlFor="s-option">Saldo dompet MeetSell</label>
                </div>
                <div className="pembayaran-metode-pembayaran-transfer-bank">
                  <input type="radio" id="t-option" name="selector" value="transferBank" onChange={ this.handleTfValue } />
                  <label htmlFor="t-option">Transfer Bank</label>
                  <img src={ bca } alt="" width="50" />
                  <img src={ mandiri } alt="" width="50" />
                  <img src={ bri } alt="" width="50" />
                </div>
                <div className="metode-pembayaran-wrap" id="metode-pembayaran-tf-bank">
                  <p>Pembayaran Anda dapat dilakukan ke salah satu rekening MeetSell dibawah:</p>
                  <div className="metode-bank-bca" onClick={ this.toggleBcaState }>
                    <Col md={ 4 } sm={ 4 } xs={ 4 }className="text-center">
                      <img src={ bca } alt="" />
                    </Col>
                    <Col md={ 6 } sm={ 6 } xs={ 6 }>
                      <p>Bank BCA Jakarta Selatan</p>
                      <p>700-30000-00998</p>
                    </Col>
                    <Col md={ 2 } sm={ 2 } xs={ 2 } className="text-right">
                      { !this.state.bcaState &&
                        <i className="fas fa-caret-right"></i>
                      }
                      { this.state.bcaState &&
                        <i className="fas fa-sort-down"></i>
                      }
                    </Col>
                    <Col md={ 12 }>
                      <div className="info-metode-bank-bca" id="info-metode-bank-bca">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </Col>
                  </div>
                  <div className="metode-bank-mandiri" onClick={ this.toggleMandiriState }>
                    <Col md={ 4 } sm={ 4 } xs={ 4 }className="text-center">
                      <img src={ mandiri } alt="" />
                    </Col>
                    <Col md={ 6 } sm={ 6 } xs={ 6 }>
                      <p>Bank BCA Jakarta Selatan</p>
                      <p>700-30000-00998</p>
                    </Col>
                    <Col md={ 2 } sm={ 2 } xs={ 2 } className="text-right">
                      { !this.state.mandiriState &&
                        <i className="fas fa-caret-right"></i>
                      }
                      { this.state.mandiriState &&
                        <i className="fas fa-sort-down"></i>
                      }
                    </Col>
                    <Col md={ 12 }>
                      <div className="info-metode-bank-mandiri" id="info-metode-bank-mandiri">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </Col>
                  </div>
                  <div className="metode-bank-bri" onClick={ this.toggleBriState }>
                    <Col md={ 4 } sm={ 4 } xs={ 4 }className="text-center">
                      <img src={ bri } alt="" />
                    </Col>
                    <Col md={ 6 } sm={ 6 } xs={ 6 }>
                      <p>Bank BCA Jakarta Selatan</p>
                      <p>700-30000-00998</p>
                    </Col>
                    <Col md={ 2 } sm={ 2 } xs={ 2 } className="text-right">
                      { !this.state.briState &&
                        <i className="fas fa-caret-right"></i>
                      }
                      { this.state.briState &&
                        <i className="fas fa-sort-down"></i>
                      }
                    </Col>
                    <Col md={ 12 }>
                      <div className="info-metode-bank-bri" id="info-metode-bank-bri">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </Col>
                  </div>
                </div>
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
                  <Col md={ 6 } sm={ 8 } xs={ 8 }>
                    <p className="detail-pesanan-harga-barang">Harga Barang</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 } xs={ 4 }>
                    <p className="detail-pesanan-rp-harga-barang">Rp 190.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 } xs={ 8 }>
                    <p className="detail-pesanan-biaya-admin">Biaya Admin</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 } xs={ 4 }>
                    <p className="detail-pesanan-rp-biaya-admin">Rp 0</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 } xs={ 8 }>
                    <p className="detail-pesanan-biaya-safe">Biaya Safe Pay</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 } xs={ 4 }>
                    <p className="detail-pesanan-rp-biaya-safe">Rp 10.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 6 } sm={ 8 } xs={ 8 }>
                    <p className="detail-pesanan-total">Total</p>
                  </Col>
                  <Col md={ 6 } sm={ 4 } xs={ 4 }>
                    <p className="detail-pesanan-rp-total">Rp 200.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 12 }>
                    <div className="detail-pesanan-warning-wrap">
                      <Col md={ 4 } sm={ 2 } xs={ 2 }>
                        <img src={ warning } alt="" width="25" />
                      </Col>
                      <Col md={ 8 } sm={ 10 } xs={ 10 }>
                        <p>By ordering with SafePay you are agree to the terms and condition</p>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={ 12 }>
                    <Button className="btn-block lanjut-pembayaran" onClick={ this.goToKonfirmasiPembayaran }>Bayar</Button>
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

export default withRouter(DetailPesananDescription)