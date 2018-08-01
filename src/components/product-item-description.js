import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  ButtonToolbar,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import {
  Link,
  withRouter
} from 'react-router-dom'
import $ from 'jquery'
import { connect } from 'react-redux';

import {
  chat_id_penjual,
  get_data_guest_api
} from '../actions/userAction';
import { get_product_detail_item_feed_api, add_to_cart_api } from '../actions/productAction';

import Env from '../lib/env';

import check from '../assets/image/product-item-check.png'
import location from '../assets/image/product-item-location.png'
import views from '../assets/image/views-product.png'
import time from '../assets/image/time-product.png'
import calendar from '../assets/image/calendar-product.png'

class ProductItemDescription extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      loginChanged: true
    }
    this.handleAddToCartPage = this.handleAddToCartPage.bind(this)
    this.goToDetailPesanan = this.goToDetailPesanan.bind(this)
  }

  handleAddToCartPage(productId) {
    // console.log(true, 'true');
    this.props.add_to_cart(productId);
  }

  goToDetailPesanan() {
    this.props.history.push('/detail-pesanan')
  }

  showChatPeople(id, namaSeller) {
    // let chatIdPeople = this.props.chatPenjualId;
    // this.props.chatPenjualId(id);
    // this.props.getProfileGuest(id)
    // localStorage.setItem('seller-name', namaSeller)
    // console.log(id, 'id show chat people')
    // $(`#chat${id}`).css({
    //   display: 'inline-block'
    // });
    this.props.getProfileGuest(id);
  };

  render() {
    let linkWrap;
    let imgWrap;
    if (this.props.productItem.productDetail) {
      let timeWrap = Env.timeAgo(Env.getDateTimeFormat(this.props.productItem.productDetail.data.post_date));

      if (timeWrap !== undefined) {
        if (timeWrap.indexOf('ago') !== -1) {
          imgWrap = <img src={ time } alt="" />
        } else if (timeWrap.indexOf('yesterday') !== -1) {
          imgWrap = <img src={ calendar } alt="" />
        } else {
          imgWrap = <img src={ calendar } alt="" />
        }
      }

      let seller_name = this.props.productItem.productDetail.data.seller_name.split(' ');
      let joinName = seller_name.join('-').toLowerCase();
      if (this.props.productItem.productDetail.data.seller_id === parseInt(localStorage.getItem('id'))) {
        linkWrap = (<Link to={ `/profile/${this.props.productItem.productDetail.data.seller_id}/${joinName}/produk-dibeli` }>
          { this.props.productItem.productDetail.data.seller_name }
        </Link>);
      } else {
        linkWrap = (<Link to={ `/profiles/${this.props.productItem.productDetail.data.seller_id}/${joinName}/semua-produk` }>
          { this.props.productItem.productDetail.data.seller_name }
        </Link>);
      };
    };

    const loginAlert = (
      <Popover id="login-alert-chat-penjual">
        anda harus login terlebih dahulu!
      </Popover>
    );

    return (
      <div>
        <Row>
          <Col md={ 12 }>
            { this.props.productItem.productDetail && <p className="pro-item-kondisi">{ this.props.productItem.productDetail.data.condition }</p> }
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            { this.props.productItem.productDetail && <p className="pro-item-harga">{ Env.formatCurrency(this.props.productItem.productDetail.data.price) }</p> }
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            { this.props.productItem.productDetail && <h2>{ this.props.productItem.productDetail.data.title }</h2> }
          </Col>
        </Row>
        <Row>
          <Col md={ 2 } sm={ 2 } xs={ 3 } className="text-center">
            { this.props.productItem.productDetail && this.props.productItem.productDetail.data.seller_photo_key !== null && 
              <img src={ Env.urlS3(this.props.productItem.productDetail.data.seller_photo_key) } alt="" />
            }
            { this.props.productItem.productDetail && this.props.productItem.productDetail.data.seller_photo_key === null && 
              <p className="initial-name">{ Env.getInitialName(this.props.productItem.productDetail.data.seller_name) }</p>
            }

          </Col>
          <Col md={ 10 } sm={ 10 } xs={ 9 }>
            <p className="pro-item-seller-name">
              { linkWrap }
              <img src={ check } alt="" className="pro-item-check-name" />
            </p>
            <fieldset className="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
              <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
            <span className="pro-item-ulasan">(21 ulasan)</span>
          </Col>
        </Row>
        <Row className="pro-item-row-address">
          <Col md={ 4 } sm={ 4 }>
            <span className="pro-item-location">
              <Col md={ 3 } sm={ 3 } xs={ 3 }>
                <img src={ location } className="pro-item-image-location" alt="" />
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                Jln. MT Haryono, Pancoran Jakarta Selatan, Jakarta 1278
              </Col>
            </span>
          </Col>
          <Col md={ 4 } sm={ 4 }>
            <span className="pro-item-hours">
              <Col md={ 3 } sm={ 3 } xs={ 3 }>
                { imgWrap }
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                { this.props.productItem.productDetail && 
                  Env.timeAgo(Env.getDateTimeFormat(this.props.productItem.productDetail.data.post_date))
                }
              </Col>
            </span>
          </Col>
          <Col md={ 4 } sm={ 4 }>
            <span className="pro-item-views">
              <Col md={ 3 } sm={ 3 } xs={ 3 }>
                <img src={ views } alt="" />
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                { this.props.productItem.productDetail && 
                  this.props.productItem.productDetail.data.seen + ' views'
                }
              </Col>
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-deskripsi">DESKRIPSI PRODUK</p>
            { this.props.productItem.productDetail && <p className="pro-item-description">{ this.props.productItem.productDetail.data.desc }</p> }
          </Col>
        </Row>
        { this.props.productItem.productDetail &&
          (this.props.productItem.productDetail.data.seller_id !== parseInt(localStorage.getItem('id'))) ? <Row className="pro-item-button-keranjang">
          <Col md={ 4 }>
            <Button className="btn-block" onClick={ () => this.handleAddToCartPage(this.props.productItem.productDetail.data.product_id) }>Tambah ke Keranjang</Button>
          </Col>
          <Col md={ 4 }>
            <Button className="btn-block" onClick={ this.showChatPeople }>Tambah ke Wishlist</Button>
          </Col>
          <Col md={ 4 }>
            {/* <Button className="btn-block" onClick={ () => this.showChatPeople(this.props.detailCaption[0].seller_id, this.props.detailCaption[0].seller_name) }>Chat Penjual</Button> */}
            { this.state.loginChanged &&
              localStorage.getItem('token') === null && <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="top" overlay={loginAlert}>
                <Button className="btn-block">Chat Penjual</Button>
              </OverlayTrigger>
            </ButtonToolbar> }
            { this.state.loginChanged &&
              localStorage.getItem('token') !== null &&
              <Button className="btn-block" onClick={() => this.showChatPeople(this.props.productItem.productDetail.data.seller_id)}>Chat Penjual</Button>
            }
          </Col>
        </Row> : '' }
        { this.props.productItem.productDetail &&
          (this.props.productItem.productDetail.data.seller_id !== parseInt(localStorage.getItem('id'))) ? <Row className="pro-item-button-beli-sekarang">
          <Col md={ 12 }>
            <Button bsStyle="danger" className="btn-block" onClick={ this.goToDetailPesanan }>BELI SEKARANG</Button>
          </Col>
        </Row> : <Button bsStyle="danger" className="btn-block">Edit Product</Button> }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    chatPenjualId: state.userReducer.chatPenjualId,
    productItem: state.productReducer.productItem,
    loginUser: state.userReducer.loginUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chatPenjualId: (id) => dispatch(chat_id_penjual(id)),
    getProfileGuest: (id) => dispatch(get_data_guest_api(id)),
    product: (id) => dispatch(get_product_detail_item_feed_api(id)),
    add_to_cart: (id) => dispatch(add_to_cart_api(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductItemDescription));