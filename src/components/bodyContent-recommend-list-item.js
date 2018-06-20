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

import Env from '../lib/env';

import location from '../assets/image/recommend-item-location.png'

class Recommend_list_item extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idToggle: ''
    }

    this.goToProductItem = this.goToProductItem.bind(this)
  }

  toggleWishlist(id) {
    this.setState({
      idToggle: id
    })
    setTimeout(() => {
      $(`#${ this.state.idToggle }`).toggleClass('in-wishlist')
    }, 150)
  }

  goToProductItem() {
    this.props.history.push('/clothes/id/12345678')
  }

  render() {
    console.log(this.props.product, 'ini product')
    const idToggle = this.state.idToggle;

    return (
      <Row>
        { this.props.product.map((res,idx) => {
          return (
            <Col md={ 3 } sm={ 6 } key={ idx }>
              <Link to={ `/${res.seller_id}/${res.id}/${res.title.split(' ').join('-').toLowerCase()}` } title={ res.title }>
                <div className="recommend-wrap-item" onClick={ this.goToProductItem }>
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
              <div 
                className="icon-wishlist" 
                id={ (idToggle === res.id) ? idToggle : res.id } onClick={ () => this.toggleWishlist(res.id) }
              >
              </div>
            </Col>
          )
        }) }
      </Row>
    )
  }

}

export default withRouter(Recommend_list_item)