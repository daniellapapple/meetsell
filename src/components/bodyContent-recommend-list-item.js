import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import {
  withRouter,
  Link
} from 'react-router-dom'
import $ from 'jquery'
import { connect } from 'react-redux';

import { add_to_cart_api } from '../actions/productAction';

import Env from '../lib/env';

import location from '../assets/image/recommend-item-location.png'
import addCart from '../assets/image/add-to-cart-product.png';

class Recommend_list_item extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: '',
      loginChanged: true
    }
  }

  componentDidUpdate(prevProps) {
    setTimeout(() => {
      if (prevProps.login_user !== this.props.login_user) {
        this.setState({
          loginChanged: true
        })
      }
    }, 1500);
  }

  toggleWishlist(id) {
    this.setState({
      idToggle: id
    })
    setTimeout(() => {
      $(`#${ this.state.idToggle }`).toggleClass('in-wishlist')
    }, 150)
  }

 addToCart(productId) {
   this.props.add_to_cart(productId);
 }

  render() {
    const idToggle = this.state.idToggle;
    
    return (
      <Row>
        { this.props.productFeed.length > 0 &&
          this.props.productFeed[0].products.map((res,idx) => {
            console.log(res, 'ressssssss')
          return (
            <Col md={ 3 } sm={ 6 } key={ idx }>
              <Link to={ `/product/${res.seller_id}/${res.id}/${res.title.split(' ').join('-').toLowerCase()}` } title={ res.title }>
                <div className="recommend-wrap-item">
                  <div className="image-item">
                    <img src={ Env.urlS3(res.main_image_key) } alt="" className="img-responsive" />
                  </div>
                  <div className="caption-item">
                    <p className="caption-price">{ Env.formatCurrency(res.price) }</p>
                    <p className="caption-description" title={res.title}>
                      { (res.title.length < 60) ? res.title : res.title.substr(0, 60) + '...' }
                    </p>
                    <p className="caption-location">
                      <img src={ location } width="18" alt="" />
                      Jakarta Pusat
                    </p>
                  </div>
                </div>
              </Link>
              { this.state.loginChanged &&
               localStorage.getItem('token') !== null &&
               parseInt(localStorage.getItem('id')) !== res.seller_id && <div 
                className="icon-wishlist" 
                id={ (idToggle === res.id) ? idToggle : res.id } onClick={ () => this.toggleWishlist(res.id) }
              >
              </div> }
              { this.state.loginChanged &&
                parseInt(localStorage.getItem('id')) !== res.seller_id && <div className="add-to-cart-icon" title="add to cart" onClick={() => this.addToCart(res.id)}>
              </div> }
            </Col>
          )
        }) }
      </Row>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    productFeed: state.productReducer.productFeed,
    login_user: state.userReducer.loginUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_to_cart: (productId) => dispatch(add_to_cart_api(productId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recommend_list_item));