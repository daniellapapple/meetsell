import React, { Component } from 'react'
import {
  Modal,
  Button,
  Col
} from 'react-bootstrap'
import {
  NavLink
} from 'react-router-dom'

import wallet from '../assets/image/wallet-teal.png'

class ModalLogin extends Component {

  render() {
    return (
      <Modal
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
        show={ this.props.showModal }
        onHide={ this.props.hideModal }
        className="navbar-my-profile-modal"
      >
        <Modal.Body>
        <Col md={ 12 }>
          <div className="header-profile-name-modal">
            <p className="name-profile-header-modal">
              { localStorage.getItem('name') }
            </p>
            <p className="wallet-profile-header-modal">
              <img src={ wallet } alt="" width="20" />
              Rp 109.000
            </p>
            <ul className="ul-header-profile-modal">
              <li>
                <NavLink to="/my-profile/produk-dibeli" activeClassName="is-active">Produk Dibeli</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile/produk-dijual" activeClassName="is-active">Produk Dijual</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile/review" activeClassName="is-active">Review</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile/chat" activeClassName="is-active">Chat <span className="chat-notif-profile-modal">1</span></NavLink>
              </li>
              <li>
                <NavLink to="/my-profile/wishlist" activeClassName="is-active">Wishlist</NavLink>
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