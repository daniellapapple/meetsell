import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import productService from '../lib/product-service';

import SocialMediaButton from './product-item-socmed-button'
import ProductSlider from './product-item-slider'
import Description from './product-item-description'

class ProductItemDescription extends Component {

  constructor() {
    super();

    this.state = {
      detailProSlider: [],
      detailCaption: [{
        category_id: null,
        post_date: '',
        title: '',
        lat: null,
        lng: null,
        wish: false,
        seller_id: null,
        price: 0,
        seen: null,
        seller_photo_key: '',
        condition: '',
        seller_name: '',
        desc: null,
        images: []
      }]
    }

    this._getDetailProduct = this._getDetailProduct.bind(this);
  };

  componentWillMount() {
    this._getDetailProduct();
  };

  _getDetailProduct() {
    let id_produk = this.props.param.id_produk;
    productService.getProductDetail(id_produk, (res) => {
      this.setState({
        detailProSlider: res.data.images,
        detailCaption: [{
          category_id: res.data.category_id,
          post_date: res.data.post_date,
          title: res.data.title,
          lat: res.data.lat,
          lng: res.data.lng,
          wish: res.data.wish,
          seller_id: res.data.seller_id,
          price: res.data.price,
          seen: res.data.seen,
          seller_photo_key: res.data.seller_photo_key,
          condition: res.data.condition,
          seller_name: res.data.seller_name,
          desc: res.data.desc,
          images: res.data.images
        }]
      });
    }, (err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <Grid>
        <div className="product-item-description">
          <Row>
            <Col md={ 6 }>
              <div className="pro-item-bagikan">
                BAGIKAN:
                <SocialMediaButton />
              </div>
              <div className="pro-item-slider">
                { this.state.detailProSlider.length > 0 && <ProductSlider slider={this.state.detailProSlider} /> }
              </div>
            </Col>
            <Col md={ 6 }>
              <Description detailCaption={ this.state.detailCaption } />
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default ProductItemDescription