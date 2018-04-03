import React, { Component } from 'react'
import {
  Grid,
  Col,
  Button
} from 'react-bootstrap'


class KonfirmasiCOD extends Component {

  render() {
    return (
      <Grid>
        <div className="konfirmasi-lanjut-pembayaran">
          <Col md={ 12 } className="text-center">
            <p className="konfirmasi-lanjut-pembayaran-title">Pembelian berhasil</p>
            <p className="konfirmasi-lanjut-pembayaran-metode">
              Anda memilih metode Cash on Delivery (COD) untuk transaksi ini. Silakan bertransaksi dengan penjual sesuai dengan kesepakatan.
            </p>
            <p className="konfirmasi-lanjut-pembayaran-fitur">
              Gunakan fitur Chat untuk mempermudah transaksi.
            </p>
            <p className="konfirmasi-lanjut-pembayaran-detail">
              <a href="#detailPesanan">Detail Pesanan</a>
            </p>
            <Button>Chat Penjual</Button>
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

export default KonfirmasiCOD