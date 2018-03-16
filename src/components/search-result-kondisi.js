import React, { Component } from 'react'
import {
  FormGroup,
  Checkbox
} from 'react-bootstrap'

class SearchResultKondisi extends Component {

  render() {
    return (
      <div className="search-result-kondisi">
        <p>KONDISI</p>
        <FormGroup>
          <Checkbox>Baru</Checkbox>
          <Checkbox>Bekas</Checkbox>
          <Checkbox>Gratis</Checkbox>
        </FormGroup>
      </div>
    )
  }

}

export default SearchResultKondisi