import React, { Component } from 'react'
import {
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'

class SearchResultHarga extends Component {

  render() {
    return (
      <div className="search-result-harga">
        <p>HARGA</p>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>Rp</InputGroup.Addon>
            <FormControl type="text" placeholder="Maksimum"></FormControl>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>Rp</InputGroup.Addon>
            <FormControl type="text" placeholder="Minimum"></FormControl>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }

}

export default SearchResultHarga