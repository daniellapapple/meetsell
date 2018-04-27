import React, { Component } from 'react'
import {
  Modal,
  Button
} from 'react-bootstrap'

import SearchResultKategori from './search-result-kategori'
import SearchResultJarak from './search-result-jarak'
import SearchResultKondisi from './search-result-kondisi'
import SearchResultHarga from './search-result-harga'

class SearchResultFilterModal extends Component {

  render() {
    return (
      <div>
        <Modal
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
        show={ this.props.showModal }
        onHide={ this.props.hideModal }
        className="filter-modal hidden-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchResultKategori />
            <SearchResultJarak />
            <SearchResultKondisi />
            <SearchResultHarga />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
            <Button className="filter-modal-search-button">Search</Button>
          </Modal.Footer>
        </Modal>

        <Modal 
          show={this.props.showModal} 
          onHide={this.props.hideModal}
          className="filter-modal visible-sm"  
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchResultKategori />
            <SearchResultJarak />
            <SearchResultKondisi />
            <SearchResultHarga />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
            <Button className="filter-modal-search-button">Search</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default SearchResultFilterModal