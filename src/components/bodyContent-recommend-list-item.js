import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import {
  withRouter
} from 'react-router-dom'
import $ from 'jquery'

import location from '../assets/image/recommend-item-location.png'

class Recommend_list_item extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: '',
      itemTitle: 'Jual kemeja Uniqlo Original Like New jarang Pake dijamin pokoknya. dilihat dulu. iya oke gimana? oke kok'
    }

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
      <Row>
        <Col md={ 3 } sm={ 6 }>
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
                { this.state.itemTitle.substr(0, 60) } ...
              </p>
              <p className="caption-location">
                <img src={ location } width="18" alt="" />
                Jakarta Pusat
              </p>
            </div>
          </div>
        </Col>
        <Col md={ 3 } sm={ 6 }>
          <div className="icon-wishlist" id={ (idToggle === 'bbb') ? idToggle : 'ini bbb' } onClick={ this.toggleWishlist.bind(this, 'bbb') }>
          </div>
          <div className="recommend-wrap-item">
            <div className="image-item">
              <img src="https://www.uvicbookstore.ca/images/pic/sweatshirts.jpg" 
              alt="" className="img-responsive"/>
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 190.000</p>
              <p className="caption-description">Jual kemeja Uniqlo Original Like New jarang Pake</p>
              <p className="caption-location">
                <img src={ location } width="18" alt="" />
                Jawa Barat
              </p>
            </div>
          </div>
        </Col>
        <Col md={ 3 } sm={ 6 }>
          <div className="icon-wishlist" id={ (idToggle === 'ccc') ? idToggle : 'ini ccc' } onClick={ () => this.toggleWishlist('ccc') }>
          </div>
          <div className="recommend-wrap-item">
            <div className="image-item">
              <img src="http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwcb979ba9/images/hi-res/84065_PBH.jpg?sw=300&sh=300&sfrm=png" alt="" className="img-responsive" />
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 1.090.000</p>
              <p className="caption-description">Jual kemeja Uniqlo Original Like New jarang Pake</p>
              <p className="caption-location">
                <img src={ location } width="18" alt="" />
                Jakarta Barat
              </p>
            </div>
          </div>
        </Col>
        <Col md={ 3 } sm={ 6 }>
          <div className="icon-wishlist" id={ (idToggle === 'ddd') ? idToggle : 'ini ccc' } onClick={ () => this.toggleWishlist('ddd') }>
          </div>
          <div className="recommend-wrap-item">
            <div className="image-item">
              <img src="https://content.competitivecyclist.com/images/items/medium/CLB/CLB002W/CH.jpg" alt="" className="img-responsive" />
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 190.000</p>
              <p className="caption-description">Jual kemeja Uniqlo Original Like New jarang Pake</p>
              <p className="caption-location">
                <img src={ location } width="18" alt="" />
                Jakarta Barat
              </p>
            </div>
          </div>
        </Col>
      </Row>
    )
  }

}

export default withRouter(Recommend_list_item)