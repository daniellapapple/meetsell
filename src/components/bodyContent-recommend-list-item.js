import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import location from '../assets/image/recommend-item-location.png'

class Recommend_list_item extends Component {

  render() {
    return (
      <Row>
        <Col md={ 3 } sm={ 6 }>
          <Link to="/clothes/id/12345678" className="link-wrap-product-item">
            <div className="recommend-wrap-item">
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
          </Link>
        </Col>
        <Col md={ 3 } sm={ 6 }>
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

export default Recommend_list_item