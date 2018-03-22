import React, { Component } from 'react'
import {
  Modal,
  Col
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import Email from '../assets/image/email-verification.png'

class RegisterSuccessModal extends Component {

  constructor(props) {
    super(props)

    this.handleGoToLogin = this.handleGoToLogin.bind(this)
  }

  handleGoToLogin() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="register-modal-success">
        <Modal
        aria-labelledby="contained-modal-title-sm"
        show={ this.props.showModal }
        onHide={ this.props.hideModal }
        >
          <Modal.Body>
            <Col md={ 12 }>
              <div className="register-modal-icon-close text-right">
                <a href="#close_icon" onClick={ this.handleGoToLogin }>
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <div className="register-modal-icon-wrap text-center">
                <img src={ Email } alt="" />
              </div>
              <div className="register-modal-caption text-center">
                <p className="register-email-verification">EMAIL VERIFICATION!</p>
                <p className="register-paragraf-one">Email verifikasi telah dikirimkan ke <span>{ this.props.emailUser }</span></p>
                <p className="register-paragraf-one">Silahkan cek email Anda untuk proses verifikasi email.</p>
              </div>
            </Col>
          </Modal.Body>
          <Modal.Footer>
            <p className="register-caption-footer">Belum menerima email? <a className="register-kirim-ulang" href="#kirim_ulang">kirim ulang</a></p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default withRouter(RegisterSuccessModal)