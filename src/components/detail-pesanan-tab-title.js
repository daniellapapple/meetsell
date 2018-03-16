import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

class DetailPesananTabTitle extends Component {

  render() {
    return (
      <Grid>
        <div className="detail-pesanan-tab-title">
          <Row>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-1">
                <span>1</span>
                Detail Pesanan
              </p>
            </Col>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-2">
                <span>2</span>
                Pembayaran
              </p>
            </Col>
            <Col md={ 4 } sm={ 4 } className="text-center">
              <p className="detail-pesanan-line-tab-3">
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

export default DetailPesananTabTitle