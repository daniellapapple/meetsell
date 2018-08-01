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
import { connect } from 'react-redux'

import { remove_product_from_cart, remove_seller_from_cart } from '../actions/productAction'

import Env from '../lib/env'

class KeranjangBelanjaContent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      removeCart: true
    }

    this.goToDetailPesanan = this.goToDetailPesanan.bind(this)
  }

  goToDetailPesanan() {
    this.props.history.push('/detail-pesanan')
  }

  removeProductFromCart(productId) {
    this.props.removeProductFromCart(productId);
    this.setState({
      removeCart: true
    });
  }

  removeSellerFromCart(sellerId) {
    this.props.removeSellerFromCart(sellerId);
    this.setState({
      removeCart: true
    });
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
              { this.state.removeCart &&
                this.props.cartRemoveByUser &&
                localStorage.getItem('productCart') &&
                JSON.parse(localStorage.getItem('productCart')).length > 0 &&
                JSON.parse(localStorage.getItem('productCart')).map((item, idx) => {
                  return <div className="keranjang-belanja-wrap-item" key={ idx }>
                    <div className="keranjang-belanja-wrap-item-header-title">
                      <Col md={ 6 } sm={ 6 } xs={ 6 }>
                        <p className="keranjang-belanja-seller-name">{ item.seller_name }</p>
                      </Col>
                      <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                        <i className="fas fa-trash-alt" onClick={() => this.removeSellerFromCart(item.seller_id)}></i>
                      </Col>
                    </div>
                    { item.products.map((items, idx) => {
                      return <div className="keranjang-belanja-wrap-item-body" key={ idx }>
                        <Col md={ 1 } sm={ 1 } className="text-center">
                          <FormGroup>
                            <Checkbox></Checkbox>
                          </FormGroup>
                        </Col>
                        <Col md={ 9 }>
                          <Col md={ 2 }>
                            <div className="keranjang-belanja-wrap-image-item">
                              <img src={ Env.urlS3(items.images[0]) } alt="" />
                            </div>
                          </Col>
                          <Col md={ 10 }>
                            <p className="keranjang-belanja-seller-small-name">{ items.seller_name }</p>
                            <p className="keranjang-belanja-title-item">
                              { items.title }
                            </p>
                            <p onClick={() => this.removeProductFromCart(items.product_id)}>
                              <i className="fas fa-trash-alt"></i>
                              Hapus
                            </p>
                          </Col>
                        </Col>
                        <Col md={ 2 }>
                          <p className="keranjang-belanja-harga">
                            { Env.formatCurrency(items.price) }
                          </p>
                        </Col>
                        <Col md={ 12 }>
                          <p className="keranjang-belanja-garis"></p>
                        </Col>
                      </div>
                    }) 
                    }
                    <div className="keranjang-belanja-wrap-item-body keranjang-belanja-wrap-item-footer">
                      <Col md={ 8 }>
                        <p className="keranjang-belanja-subtotal">
                          Subtotal: <span>{ Env.formatCurrency(item.total_price) }</span>
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
                })
              }

              { this.state.removeCart &&
                !this.props.cartRemoveByUser &&
                localStorage.getItem('productCart') &&
                JSON.parse(localStorage.getItem('productCart')).length > 0 &&
                JSON.parse(localStorage.getItem('productCart')).map((item, idx) => {
                  return <div className="keranjang-belanja-wrap-item" key={ idx }>
                    <div className="keranjang-belanja-wrap-item-header-title">
                      <Col md={ 6 } sm={ 6 } xs={ 6 }>
                        <p className="keranjang-belanja-seller-name">{ item.seller_name }</p>
                      </Col>
                      <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                        <i className="fas fa-trash-alt" onClick={() => this.removeSellerFromCart(item.seller_id)}></i>
                      </Col>
                    </div>
                    { item.products.map((items, idx) => {
                      return <div className="keranjang-belanja-wrap-item-body" key={ idx }>
                        <Col md={ 1 } sm={ 1 } className="text-center">
                          <FormGroup>
                            <Checkbox></Checkbox>
                          </FormGroup>
                        </Col>
                        <Col md={ 9 }>
                          <Col md={ 2 }>
                            <div className="keranjang-belanja-wrap-image-item">
                              <img src={ Env.urlS3(items.images[0]) } alt="" />
                            </div>
                          </Col>
                          <Col md={ 10 }>
                            <p className="keranjang-belanja-seller-small-name">{ items.seller_name }</p>
                            <p className="keranjang-belanja-title-item">
                              { items.title }
                            </p>
                            <p onClick={() => this.removeProductFromCart(items.product_id)}>
                              <i className="fas fa-trash-alt"></i>
                              Hapus
                            </p>
                          </Col>
                        </Col>
                        <Col md={ 2 }>
                          <p className="keranjang-belanja-harga">
                            { Env.formatCurrency(items.price) }
                          </p>
                        </Col>
                        <Col md={ 12 }>
                          <p className="keranjang-belanja-garis"></p>
                        </Col>
                      </div>
                    }) 
                    }
                    <div className="keranjang-belanja-wrap-item-body keranjang-belanja-wrap-item-footer">
                      <Col md={ 8 }>
                        <p className="keranjang-belanja-subtotal">
                          Subtotal: <span>{ Env.formatCurrency(item.total_price) }</span>
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
                })
              }

              { this.state.removeCart &&
              localStorage.getItem('productCart') === null &&
                <div>
                  <p>Gak ada product item</p>
                  <p>Belanja dulu!</p>
                </div>
              }

              { this.state.removeCart &&
              localStorage.getItem('productCart') !== null &&
              JSON.parse(localStorage.getItem('productCart')).length === 0 &&
                <div>
                  <p>Gak ada product item</p>
                  <p>Belanja dulu!</p>
                </div>
              }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    cartBagId: state.productReducer.cartBagId,
    cartRemoveByUser: state.userReducer.cartRemoveByUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (id) => dispatch(remove_product_from_cart(id)),
    removeSellerFromCart: (id) => dispatch(remove_seller_from_cart(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KeranjangBelanjaContent))