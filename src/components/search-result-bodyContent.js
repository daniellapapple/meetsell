import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Pagination
} from 'react-bootstrap'

import SearchResultKategori from './search-result-kategori'
import SearchResultProductItem from './search-result-product-item'
import SearchResultJarak from './search-result-jarak'
import SearchResultKondisi from './search-result-kondisi'
import SearchResultHarga from './search-result-harga'
import ContentFooter from './content-footer'

class SearchResultBodyContent extends Component {

  render() {
    return (
      <div>
        <Grid>
          <div className="search-result-bodyContent">
            <Row>
              <Col md={ 3 }>
                <SearchResultKategori />
                <SearchResultJarak />
                <SearchResultKondisi />
                <SearchResultHarga />
              </Col>
              <Col md={ 9 }>
                <SearchResultProductItem />
                <SearchResultProductItem />
                <SearchResultProductItem />
                <SearchResultProductItem />
                <SearchResultProductItem />
                <SearchResultProductItem />
                <SearchResultProductItem />
              </Col>
            </Row>
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
          </div>
        </Grid>
        <div className="content-footer">
          <Grid>
            <ContentFooter />
          </Grid>
        </div>
      </div>
    )
  }

}

export default SearchResultBodyContent