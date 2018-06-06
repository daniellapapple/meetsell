import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'

class DetailPesananTabTitle extends Component {

  constructor(props) {
    super(props)
    
    this.goToDetailPesanan = this.goToDetailPesanan.bind(this)
    this.goToPembayaran = this.goToPembayaran.bind(this)
    this.goToKonfirmasi = this.goToKonfirmasi.bind(this)
  }

  componentDidMount() {
    if (window.location.href.indexOf('detail-pesanan') !== -1) {
      $('.detail-pesanan-line-tab-1').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-1 span').css({
        border: '1px solid #26A69A'
      })
    }
    
    if (window.location.href.indexOf('pembayaran') !== -1) {
      $('.detail-pesanan-line-tab-1').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-1 span').css({
        borderColor: '#26A69A'
      })
      $('.detail-pesanan-line-tab-1').toggleClass('changed')
      $('.detail-pesanan-line-tab-2').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-2 span').css({
        borderColor: '#26A69A'
      })
    }

    if (window.location.href.indexOf('konfirmasi-pembayaran') !== -1) {
      $('.detail-pesanan-line-tab-3').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-3 span').css({
        borderColor: '#26A69A'
      })
      $('.detail-pesanan-line-tab-2').toggleClass('changed')
    }

    if (window.location.href.indexOf('konfirmasi-cod') !== -1) {
      $('.detail-pesanan-line-tab-1').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-1 span').css({
        borderColor: '#26A69A'
      })
      $('.detail-pesanan-line-tab-1').toggleClass('changed')
      $('.detail-pesanan-line-tab-2').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-2 span').css({
        borderColor: '#26A69A'
      })
      $('.detail-pesanan-line-tab-2').toggleClass('changed')
      $('.detail-pesanan-line-tab-3').css({
        color: '#26A69A'
      })
      $('.detail-pesanan-line-tab-3 span').css({
        borderColor: '#26A69A'
      })
    }
  }

  goToDetailPesanan() {
    this.props.history.push('/detail-pesanan')
  }

  goToPembayaran() {
    this.props.history.push('/pembayaran')
  }

  // menghubungkan kedua konfirmasi yaitu, konfirmasi lanjut pembayaran dan konfirmasi cod
  goToKonfirmasi() {
    this.props.history.push('/konfirmasi-pembayaran')
  }

  render() {
    return (
      <Grid>
        <div className="detail-pesanan-tab-title">
          <Row>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-1" onClick={ this.goToDetailPesanan }>
                <span>1</span>
                Detail Pesanan
              </p>
            </Col>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-2" onClick={ this.goToPembayaran }>
                <span>2</span>
                Pembayaran
              </p>
            </Col>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-3" onClick={ this.goToKonfirmasi }>
                <span>3</span>
                Konfirmasi
              </p>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default withRouter(DetailPesananTabTitle)