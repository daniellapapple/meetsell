import React, { Component } from 'react'
import {
  Grid,
  Col,
  Button
} from 'react-bootstrap'


class KonfirmasiLanjutPembayaran extends Component {

  render() {
    return (
      <Grid>
        <div className="konfirmasi-lanjut-pembayaran">
          <Col md={ 12 } className="text-center">
            <p className="konfirmasi-lanjut-pembayaran-title">Pembelian berhasil</p>
            <p className="konfirmasi-lanjut-pembayaran-silahkan">Silahkan lakukan pembayaran sebelum:</p>
            <p className="konfirmasi-lanjut-pembayaran-tanggal">Jum'at 6 April 2018 Pukul 14:00 PM</p>
            <p className="konfirmasi-lanjut-pembayaran-detail">
              <a href="#detailPesanan">Detail Pesanan</a>
            </p>
            <Button>Konfirmasi Pembayaran</Button>
          </Col>
          <Col md={ 12 }>
            <p className="konfirmasi-lanjut-pembayaran-catatan">Catatan:</p>
            <p className="konfirmasi-lanjut-pembayaran-simpan-bukti">- Simpan bukti pembayaran Anda. Sewaktu-waktu akan diperlukan.</p>
            <p className="konfirmasi-lanjut-pembayaran-selalu">- Selalu berhati-hati terhadap penipuan.</p>
          </Col>
        </div>
      </Grid>
    )
  }

}

export default KonfirmasiLanjutPembayaran