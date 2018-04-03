import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import {
  Link,
  withRouter
} from 'react-router-dom'
import $ from 'jquery'

import location from '../assets/image/recommend-item-location.png'

class ProductItemRecommend extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: ''
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
    this.props.history.push('/clothes/id/12345678')
  }

  render() {
    const idToggle = this.state.idToggle

    return (
      <Grid>
        <div className="product-item-recommend">
          <Row>
            <Col md={ 6 } sm={ 6 } xs={ 6 }>
              <p className="pro-item-recommend">RECOMMENDED FOR YOU</p>
            </Col>
            <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
              <a href="#seeAll">See all</a>
            </Col>
          </Row>
          <Row>
            <Col md={ 3 }>
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
                  <p className="caption-price">Rp 190.000</p>
                  <p className="caption-description">
                    Jual kemeja Uniqlo Original Like New jarang Pake
                  </p>
                  <p className="caption-location">
                    <img src={ location } width="18" alt="" />
                    Jakarta Pusat
                  </p>
                </div>
              </div>
            </Col>
            <Col md={ 3 }>
              <div 
                className="icon-wishlist" 
                id={ (idToggle === 'bbb') ? idToggle : 'ini aaa' } onClick={ () => this.toggleWishlist('bbb') }
              >
              </div>
              <div className="recommend-wrap-item">
                <div className="image-item">
                  <img src="https://img.laku6.com/A68OVvbxunD9gY9mWAz4CQjbn7I=/fit-in/300x300/filters:fill(white)/https://s3-ap-southeast-1.amazonaws.com/laku6-stock-phone-images/iphone-6-space-gray-01.jpg" alt="" className="img-responsive" />
                </div>
                <div className="caption-item">
                  <p className="caption-price">Rp 190.000</p>
                  <p className="caption-description">
                    <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                  </p>
                  <p className="caption-location">
                    <img src={ location } width="18" alt="" />
                    Jakarta Pusat
                  </p>
                </div>
              </div>
            </Col>
            <Col md={ 3 }>
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
                  <p className="caption-price">Rp 190.000</p>
                  <p className="caption-description">
                    <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                  </p>
                  <p className="caption-location">
                    <img src={ location } width="18" alt="" />
                    Jakarta Pusat
                  </p>
                </div>
              </div>
            </Col>
            <Col md={ 3 }>
              <div 
                className="icon-wishlist" 
                id={ (idToggle === 'ddd') ? idToggle : 'ini aaa' } onClick={ () => this.toggleWishlist('ddd') }
              >
              </div>
              <div className="recommend-wrap-item">
                <div className="image-item">
                  <img src="http://www.anneahira.com/images_wp/cara-memilih-sepeda.jpg" alt="" className="img-responsive" />
                </div>
                <div className="caption-item">
                  <p className="caption-price">Rp 190.000</p>
                  <p className="caption-description">
                    <Link to="/clothes/id/12345678">Jual kemeja Uniqlo Original Like New jarang Pake</Link>
                  </p>
                  <p className="caption-location">
                    <img src={ location } width="18" alt="" />
                    Jakarta Pusat
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default withRouter(ProductItemRecommend)