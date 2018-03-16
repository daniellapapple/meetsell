import React, { Component } from 'react'

class ProductItemSocmedButton extends Component {

  render() {
    return (
      <div className="product-item-social-button">
        <a href="#facebook">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#twitter">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="#youtube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    )
  }

}

export default ProductItemSocmedButton