import React, { Component } from 'react'
import {
  Modal,
  Button,
  Col,
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'

class ModalLogin extends Component {

  render() {
    return (
      <Modal
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
        show={ this.props.showModal }
        onHide={ this.props.hideModal }
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <Col md={ 12 }>
          <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="far fa-envelope"></i>
                </InputGroup.Addon>
                <FormControl type="text" placeholder="Email" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="fas fa-unlock"></i>
                </InputGroup.Addon>
                <FormControl type="password" placeholder="Password" />
              </InputGroup>
            </FormGroup>
            <div className="navbar-login-checkbox">
              <Col md={ 6 } sm={ 6 } xs={ 6 }>
                <input id="box1" type="checkbox" />
                <label htmlFor="box1">Ingat saya</label>
              </Col>
              <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
                <a href="#forgot-password" className="navbar-forgot-password">
                  Forgot password?
                </a>
              </Col>
            </div>
            <Button className="btn-block btn-masuk-navbar">Masuk</Button>
            <p className="text-center">atau</p>
            <Button className="btn-block btn-navbar-fb">
              <i className="fab fa-facebook-square"></i>
              Facebook
            </Button>
            <Button className="btn-block btn-navbar-google">
              <i className="fab fa-google"></i>
              Google
            </Button>
          </form>
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