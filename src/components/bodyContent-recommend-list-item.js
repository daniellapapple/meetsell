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
    }, 300)
  }

  goToProductItem() {
    this.props.history.push('/clothes/id/12345678')
  }

  formatCurrency(nominal) {
    if (nominal === undefined || nominal === 0) {
      return 'FREE';
    }
    let reverse = nominal.toString().split('').reverse().join('');
    let formated = reverse.match(/\d{1,3}/g);
    return 'Rp ' + formated.join('.').split('').reverse().join('')
  }

  render() {
    console.log(this.props.product, 'ini product')
    const idToggle = this.state.idToggle;

    return (
      <Row>
        { this.props.product.map((res,idx) => {
          return (
            <Col md={ 3 } sm={ 6 } key={ idx }>
              <Link to={ `/${res.seller_id}/${res.id}/${res.title.split(' ').join('-').toLowerCase()}` }>
                <div className="recommend-wrap-item" onClick={ this.goToProductItem }>
                  <div className="image-item">
                    <img src={ `https://s3-ap-southeast-1.amazonaws.com/meetsell-d/${res.main_image_key}` } alt="" className="img-responsive" />
                  </div>
                  <div className="caption-item">
                    <p className="caption-price">{ this.formatCurrency(res.price) }</p>
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