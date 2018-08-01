import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {
  Link,
  withRouter
} from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';

import Env from '../lib/env';

import { get_product_feed_api, add_to_cart_api } from '../actions/productAction';

import ProductService from '../lib/product-service';

import location from '../assets/image/recommend-item-location.png'

class ProductItemRecommend extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: '',
      productRecommendedList: [],
      loginChanged: true
    }

    this.toggleWishlist = this.toggleWishlist.bind(this)
  }

  toggleWishlist(id) {
    this.setState({
      idToggle: id
    })
    setTimeout(() => {
      $(`#${ this.state.idToggle }`).toggleClass('in-wishlist')
    }, 150)
  }

  componentDidMount() {
    let setRandom = new Set();
    do {
      let ri =  Env.getRandomNumber(0, this.props.productFeed.data.products.length - 1);

      setRandom.add(ri);

    } while( setRandom.size < 4);

    let arrRandom = Array.from(setRandom);
    let productRecommendedList = [];
    for(let i = 0; i < arrRandom.length;i++){
      productRecommendedList.push(this.props.productFeed.data.products[arrRandom[i]]);
    }
    this.setState({
      productRecommendedList: productRecommendedList
    });
  }

  componentDidUpdate(prevProps) {
    let setRandom = new Set();
    this.state.productRecommendedList.map((item, idx) => {
      if (parseInt(this.props.param.id_produk) === item.id) {
        do {
          let ri = Env.getRandomNumber(0, this.props.productFeed.data.products.length - 1);

          setRandom.add(ri);
        } while(setRandom.size < 4);

        let arrRandom = Array.from(setRandom);
        let productRecommendedList = [];
        for(let i = 0; i < arrRandom.length;i++){
          productRecommendedList.push(this.props.productFeed.data.products[arrRandom[i]]);
        }
        this.setState({
          productRecommendedList: productRecommendedList
        });
      }
    })

    if (prevProps.loginUser !== this.props.loginUser) {
      this.setState({
        loginChanged: true
      })
    }
  }

  addToCart(productId) {
    this.props.add_to_cart(productId)
  }

  render() {
    const idToggle = this.state.idToggle;

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
            { this.state.productRecommendedList.length > 0 &&
            this.state.productRecommendedList.map((item, idx) => {
              let splitNama = item.title.split(' ');
              let joinNama = splitNama.join('-').toLowerCase();
              return <Col md={ 3 } key={ idx }>
                { this.state.loginChanged &&
                localStorage.getItem('token') !== null &&
                parseInt(localStorage.getItem('id')) !== item.seller_id && <div 
                  className="icon-wishlist" 
                  id={ (idToggle === item.id) ? idToggle : item.id } onClick={ () => this.toggleWishlist(item.id) }
                >
                </div> }
                <div className="add-to-cart-icon" title="add to cart" onClick={() => this.addToCart(item.id)}>
                </div>
                <Link to={ `/product/${item.seller_id}/${item.id}/${joinNama}` }>
                  <div className="recommend-wrap-item">
                    <div className="image-item">
                      <img src={ Env.urlS3(item.main_image_key) } alt="" className="img-responsive" />
                    </div>
                    <div className="caption-item">
                      <p className="caption-price">{ Env.formatCurrency(item.price) }</p>
                      <p className="caption-description">
                        { (item.title.length < 60) ? item.title : item.title.substr(0, 60) + '...' }
                      </p>
                      <p className="caption-location">
                        <img src={ location } width="18" alt="" />
                        Jakarta Pusat
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
              })
            }
          </Row>
        </div>
      </Grid>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    loginUser: state.userReducer.loginUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_to_cart: (obj) => dispatch(add_to_cart_api(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemRecommend);