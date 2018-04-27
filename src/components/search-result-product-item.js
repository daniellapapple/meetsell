import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import {
  Redirect
} from 'react-router'
import $ from 'jquery'

import location from '../assets/image/recommend-item-location.png'

class SearchResultProductItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idtoggle: '',
      redirect: false
    }

    this.toggleWishlist = this.toggleWishlist.bind(this)
    this.goToProductItem = this.goToProductItem.bind(this)
  }

  toggleWishlist(id) {
    this.setState({
      idToggle: id
    })
    setTimeout(() => {
      $(`#${ this.state.idToggle }`).toggleClass('in-wishlist')
    }, 300)
  }

  goToProductItem() {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { idToggle, redirect } = this.state

    if (redirect) {
      return <Redirect to="/clothes/id/12345678" />
    }

    return (
      <div>
        <Row>
          <Col md={ 4 }>
            <div 
              className="icon-wishlist" 
              id={ (idToggle === 'aaa') ? idToggle : 'ini aaa' } onClick={ () => this.toggleWishlist('aaa') }
            >
            </div>
            <div className="recommend-wrap-item" onClick={ this.goToProductItem }>
              <div className="image-item">
                <img src="https://www.bigissueshop.com/media/product/2017/10/05/845_2077_w300.jpg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 390.000</p>
                <p className="caption-description">BB 8 Star Wars Karakter Murah</p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Utara
                </p>
              </div>
            </div>
          </Col>
          <Col md={ 4 }>
            <div 
              className="icon-wishlist" 
              id={ (idToggle === 'bbb') ? idToggle : 'ini aaa' } onClick={ () => this.toggleWishlist('bbb') }
            >
            </div>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="https://ecs7.tokopedia.net/img/cache/300/catalog/2017/9/4/15524491/15524491_d41fbc70-4134-40d1-b4c5-5a7904399b7e.png" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 1.090.000</p>
                <p className="caption-description">Jual kemeja Uniqlo Original Like New jarang Pake</p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
          <Col md={ 4 }>
            <div 
              className="icon-wishlist" 
              id={ (idToggle === 'ccc') ? idToggle : 'ini aaa' } onClick={ () => this.toggleWishlist('ccc') }
            >
            </div>
            <div className="recommend-wrap-item">
              <div className="image-item">
                <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" className="img-responsive" />
              </div>
              <div className="caption-item">
                <p className="caption-price">Rp 10.090.000</p>
                <p className="caption-description">Macbook Pro 13 Inch tahun 2015</p>
                <p className="caption-location">
                  <img src={ location } width="18" alt="" />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

}

export default SearchResultProductItem