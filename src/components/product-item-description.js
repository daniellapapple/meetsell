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

import check from '../assets/image/product-item-check.png'
import location from '../assets/image/product-item-location.png'
import views from '../assets/image/views-product.png'
import time from '../assets/image/time-product.png'

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
    return (
      <div>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-kondisi">BEKAS</p>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-harga">Rp 190.000</p>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <h2>Jual kemeja Uniqlo Original Like New jarang Pake</h2>
          </Col>
        </Row>
        <Row>
          <Col md={ 2 } sm={ 2 } xs={ 3 }>
            <img src="http://i0.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" />
          </Col>
          <Col md={ 10 } sm={ 10 } xs={ 9 }>
            <p className="pro-item-seller-name">
              <Link to="/profile-seller">
                Tatjana Shapira Online
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
                <img src={ time } alt="" />
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                20 hours ago
              </Col>
            </span>
          </Col>
          <Col md={ 4 } sm={ 4 }>
            <span className="pro-item-views">
              <Col md={ 3 } sm={ 3 } xs={ 3 }>
                <img src={ views } alt="" />
              </Col>
              <Col md={ 9 } sm={ 9 } xs={ 9 }>
                1223 views
              </Col>
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <p className="pro-item-deskripsi">DESKRIPSI PRODUK</p>
            <p className="pro-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </Col>
        </Row>
        <Row className="pro-item-button-keranjang">
          <Col md={ 6 }>
            <Button className="btn-block" onClick={ this.handleAddToCartPage }>Tambah ke Keranjang</Button>
          </Col>
          <Col md={ 6 }>
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