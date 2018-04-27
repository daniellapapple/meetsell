import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Pagination,
  Button
} from 'react-bootstrap'

import SearchResultFilterModal from './search-result-filter-modal'
import SearchResultKategori from './search-result-kategori'
import SearchResultProductItem from './search-result-product-item'
import SearchResultJarak from './search-result-jarak'
import SearchResultKondisi from './search-result-kondisi'
import SearchResultHarga from './search-result-harga'
import ContentFooter from './content-footer'

class SearchResultBodyContent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showModalFilter: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose() {
    this.setState({
      showModalFilter: false
    })
  }

  handleShow() {
    this.setState({
      showModalFilter: true
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <div className="search-result-bodyContent">
            <Row>
              <Col md={ 3 } className="hidden-lg hidden-md visible-sm visible-xs">
                <Button className="btn-block btn-filter" onClick={ this.handleShow }>Filter</Button>
              </Col>
              <Col md={ 3 } className="visible-lg visible-md hidden-sm hidden-xs">
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
        <SearchResultFilterModal showModal={ this.state.showModalFilter } hideModal={ this.handleClose } />
      </div>
    )
  }

}

export default SearchResultBodyContent