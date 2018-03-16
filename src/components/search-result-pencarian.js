import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap'

class SearchResultPencarian extends Component {

  render() {
    return (
      <Grid>
        <div className="search-result-pencarian">
          <Row>
            <Col md={ 6 } sm={ 6 } xs={ 6 }>
              <p>HASIL PENCARIAN "{ this.props.searchResult }"</p>
            </Col>
            <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
              <p className="search-result-urutkan">
                URUTKAN
              </p>
              <FormGroup>
                <FormControl componentClass="select">
                  <option className="search-result-title-option">Harga Termurah</option>
                  <option>Rp 1.000</option>
                  <option>Rp 2.000</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }

}

export default SearchResultPencarian