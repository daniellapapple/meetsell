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
      detailProSlider: []
    }

    this._getDetailProduct = this._getDetailProduct.bind(this);
  };

  componentDidMount() {
    this._getDetailProduct();
  };

  _getDetailProduct() {
    let id_produk = this.props.param.id_produk;
    productService.getProductDetail(id_produk, (res) => {
      this.setState({
        detailProSlider: res.data.images
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
              <Description />
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default ProductItemDescription