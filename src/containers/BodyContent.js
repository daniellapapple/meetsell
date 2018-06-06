import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Pagination
} from 'react-bootstrap';

import productService from '../lib/product-service';

import RecommendListItem from '../components/bodyContent-recommend-list-item';
import PopulerListItem from '../components/bodyContent-populer-list-item'
import ContentFooter from '../components/content-footer';

class BodyContent extends Component {

  constructor() {
    super();

    this.state = {
      productFeed: [],
      productFeedTitle: ''
    };

    this._getFeed = this._getFeed.bind(this);
  };

  componentDidMount() {
    this._getFeed();
  };

  _getFeed() {
    productService.feed('page', (res) => {
      if (res.status.code === 0) {
        this.setState({
          productFeed: res.data.products
        });
      };
    }, (err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <div className="bodyContent-recommended">
          <Grid>
            <Row>
              <Col md={ 6 } sm={ 6 } xs={ 6 }>
                <h3>RECOMMENDED FOR YOU</h3>
              </Col>
              <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                <a href="#seeAll-recommend">See all</a>
              </Col>
            </Row>
            <RecommendListItem product={ this.state.productFeed } />
          </Grid>
        </div>
        {/* <div className="bodyContent-terpopuler">
          <Grid>
            <Row>
              <Col md={ 6 } sm={ 6 } xs={ 6 } className="left-title">
                <a href="#populer" className="active-title">TERPOPULER</a>
                <a href="#baru">TERBARU</a>
                <a href="#promo">PROMO</a>
              </Col>
              <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                <a href="#seeAll-populer">See all</a>
              </Col>
            </Row>
            <PopulerListItem />
            <PopulerListItem />
            <PopulerListItem />
            <PopulerListItem />
            <Row>
              <Col md={ 12 } className="text-right">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>

                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
              </Col>
            </Row>
          </Grid>
        </div> */}
        <div className="content-footer">
          <Grid>
            <ContentFooter />
          </Grid>
        </div>
      </div>
    );
  };

};

export default BodyContent;