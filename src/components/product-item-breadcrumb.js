import React, { Component } from 'react'
import {
  Grid,
  Breadcrumb
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductItemBreadcrumb extends Component {

  constructor() {
    super();

    this.goToHome = this.goToHome.bind(this);
  }

  goToHome(){
    this.props.history.push('/');
  }

  render() {
    return (
      <Grid>
        <div className="product-item-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item onClick={ this.goToHome }>
              <i className="fas fa-home"></i>
              Home
            </Breadcrumb.Item>
            { this.props.productItem.productDetail && <Breadcrumb.Item active>{ this.props.productItem.productDetail.data.title }</Breadcrumb.Item> }
          </Breadcrumb>
        </div>
      </Grid>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    productItem: state.productReducer.productItem
  }
}

export default withRouter(connect(mapStateToProps)(ProductItemBreadcrumb));