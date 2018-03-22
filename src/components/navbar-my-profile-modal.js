import React, { Component } from 'react'
import {
  Modal,
  Button,
  Col
} from 'react-bootstrap'

import wallet from '../assets/image/wallet.png'

class ModalLogin extends Component {

  render() {
    return (
      <Modal
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
        show={ this.props.showModal }
        onHide={ this.props.hideModal }
      >
        <Modal.Body>
        <Col md={ 12 }>
          <div className="header-profile-name-modal">
            <p className="name-profile-header-modal">{ localStorage.getItem('name') }</p>
            <p className="wallet-profile-header-modal">
              <img src={ wallet } alt="" width="20" />
              Rp 109.000
            </p>
            <ul className="ul-header-profile-modal">
              <li>
                <a>Produk Dibeli</a>
              </li>
              <li>
                <a>Produk Dijual</a>
              </li>
              <li>
                <a>Review</a>
              </li>
              <li>
                <a>Chat</a>
              </li>
              <li>
                <a>Wishlist</a>
              </li>
              <li>
                <a onClick={ this.props.logout } id="loadATag">Logout</a>
              </li>
            </ul>
          </div>
          <Button className="close-modal-login" onClick={ this.props.hideModal }>
            Close
          </Button>
        </Col>
        </Modal.Body>
      </Modal>
    )
  }

}

export default ModalLogin