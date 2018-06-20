import React, { Component } from 'react'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap'
import {
  Link,
  withRouter
} from 'react-router-dom'
import $ from 'jquery'

import Env from '../lib/env';

import check from '../assets/image/product-item-check.png'
import location from '../assets/image/product-item-location.png'
import views from '../assets/image/views-product.png'
import time from '../assets/image/time-product.png'
import calendar from '../assets/image/calendar-product.png'

class ProductItemDescription extends Component {

  constructor(props) {
    super(props)

    this.handleAddToCartPage = this.handleAddToCartPage.bind(this)
    this.goToDetailPesanan = this.goToDetailPesanan.bind(this)
  }

  handleAddToCartPage() {
    this.props.history.push('/keranjang-belanja')
  }

  goToDetailPesanan() {
    this.props.history.push('/detail-pesanan')
  }

  showChatPeople() {
    $('.chat-list-people').css({
      display: 'block'
    })
    $('#body-chat-list-people').slideDown()
  }

  render() {
    let timeWrap = Env.timeAgo(Env.getDateTimeFormat(this.props.detailCaption[0].post_date))
    let imgWrap

    if (timeWrap !== undefined) {
      if (timeWrap.indexOf('-') === -1) {
        imgWrap = <img src={ time } alt="" />
      } else {
        imgWrap = <img src={ calendar } alt="" />
      }
    }

    return (
      <div>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-kondisi">{ this.props.detailCaption[0].condition }</p>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-harga">{ Env.formatCurrency(this.props.detailCaption[0].price) }</p>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <h2>{ this.props.detailCaption[0].title }</h2>
          </Col>
        </Row>
        <Row>
          <Col md={ 2 } sm={ 2 } xs={ 3 } className="text-center">
            { (this.props.detailCaption[0].seller_photo_key !== null) ? <img src={ Env.urlS3(this.props.detailCaption[0].seller_photo_key) } alt="" /> : <p className="initial-name">{ Env.getInitialName(this.props.detailCaption[0].seller_name) }</p> }

          </Col>
          <Col md={ 10 } sm={ 10 } xs={ 9 }>
            <p className="pro-item-seller-name">
              <Link to="/profile-seller">
                { this.props.detailCaption[0].seller_name }
              </Link>
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
                { Env.timeAgo(Env.getDateTimeFormat(this.props.detailCaption[0].post_date)) }
              </Col>
            </span>
          </Col>
          <Col md={ 4 } sm={ 4 }>
            <span className="pro-item-views">
              <Col md={ 3 } sm={ 3 } xs={ 3 }>
                <img src={ views } alt="" />
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                { this.props.detailCaption[0].seen } views
              </Col>
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-deskripsi">DESKRIPSI PRODUK</p>
            <p className="pro-item-description">{ this.props.detailCaption[0].desc }</p>
          </Col>
        </Row>
        <Row className="pro-item-button-keranjang">
          <Col md={ 4 }>
            <Button className="btn-block" onClick={ this.handleAddToCartPage }>Tambah ke Keranjang</Button>
          </Col>
          <Col md={ 4 }>
            <Button className="btn-block" onClick={ this.showChatPeople }>Tambah ke Wishlist</Button>
          </Col>
          <Col md={ 4 }>
            <Button className="btn-block" onClick={ this.showChatPeople }>Chat Penjual</Button>
          </Col>
        </Row>
        <Row className="pro-item-button-beli-sekarang">
          <Col md={ 12 }>
            <Button bsStyle="danger" className="btn-block" onClick={ this.goToDetailPesanan }>BELI SEKARANG</Button>
          </Col>
        </Row>
      </div>
    )
  }

}

export default withRouter(ProductItemDescription)