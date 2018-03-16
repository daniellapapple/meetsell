import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

import location from '../assets/image/recommend-item-location.png'

class Populer_list_item extends Component {

  render() {
    return (
      <Row>
        <Col md={ 3 } sm={ 6 }>
          <div className="recommend-wrap-item">
            <div className="image-item">
              <img src="https://i.pinimg.com/originals/ca/f2/ff/caf2ff9237c7a711901f4c846ace7c9f.jpg" alt="" className="img-responsive" />
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 190.000</p>
              <p className="caption-description">Jual kemeja Uniqlo Original Like New jarang Pake</p>
              <p className="caption-location">
                <img src={ location } width="18" alt="" />
                Jakarta Pusat
              </p>
            </div>
          </div>
        </Col>
        <Col md={ 3 } sm={ 6 }>
          <div className="recommend-wrap-item">
            <div className="image-item">
              <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" 
              alt="" className="img-responsive"/>
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 190.000</p>
              <p className="caption-description">Jual Action Figure Stormtrooper Star Wars IV</p>
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
              <img src="https://ecs7.tokopedia.net/img/cache/300/catalog/2017/9/4/15524491/15524491_d41fbc70-4134-40d1-b4c5-5a7904399b7e.png" alt="" className="img-responsive" />
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
              <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/macbookpro/featured-content-mbp15-open_2x.jpg" alt="" className="img-responsive" />
            </div>
            <div className="caption-item">
              <p className="caption-price">Rp 10.090.000</p>
              <p className="caption-description">Macbook Pro 13 Inch tahun 2015</p>
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

export default Populer_list_item