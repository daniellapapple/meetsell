import React, { Component } from 'react'
import {
  Col,
  Navbar,
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Nav,
  NavItem,
  Popover,
  OverlayTrigger,
  ButtonToolbar
} from 'react-bootstrap'
import {
  LinkContainer
} from 'react-router-bootstrap'
import {
  Link,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'

import { header_search } from '../actions/headerSearchAction'

import logo from '../assets/image/logo/logo-1.1.png'
import pic1 from '../assets/image/jual-barang-camera-1.1.png'
import cart from '../assets/image/icon-cart.png'

import ModalLogin from '../components/navbar-header-login-modal'

const popOverBottom = (
  <Popover id="popover-positioned-bottom">
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
    </Col>
  </Popover>
)

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textInputSearch: '',
      kategori: '',
      showModalLogin: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonSearch = this.handleButtonSearch.bind(this)
    this.handleKategori = this.handleKategori.bind(this)
    this.handleButtonJualBarang = this.handleButtonJualBarang.bind(this)
    this.showModalLogin = this.showModalLogin.bind(this)
    this.hideModalLogin = this.hideModalLogin.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      textInputSearch: e.target.value
    })
  }

  handleKategori(e) {
    this.setState({
      kategori: e.target.value
    })
  }

  handleButtonSearch(e) {
    e.preventDefault()
    if (this.state.textInputSearch === '') {
      return
    }
    this.props.history.push({
      pathname: '/search-result=' + this.state.textInputSearch
    })
    this.props.headerSearch(this.state.kategori)
  }

  handleButtonJualBarang(e) {
    e.preventDefault()
    this.props.history.push('/jual-barang')
  }

  showModalLogin() {
    this.setState({
      showModalLogin: true
    })
  }

  hideModalLogin() {
    this.setState({
      showModalLogin: false
    })
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={ logo } alt="" width="150" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Link to="/keranjang-belanja">
              <img src={ cart } alt="" width="30" className="header-icon-cart-top hidden-lg hidden-md hidden-sm" />
            </Link>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <form onSubmit={ this.handleButtonSearch }>
                <FormGroup className="header-input-search">
                  <InputGroup>
                    <InputGroup.Addon>
                      <i className="fas fa-search"></i>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Search" onChange={ this.handleInputChange } />
                  </InputGroup>
                </FormGroup>
                <Button className="header-btn-cari" onClick={ this.handleButtonSearch }>
                  Cari
                </Button>
                <Button className="header-btn-jual-barang" onClick={ this.handleButtonJualBarang }>
                  <img src={ pic1 } width="20" alt="" />
                  Jual Barang
                </Button>
                <Link to="/keranjang-belanja">
                  <img src={ cart } alt="" width="30" className="header-icon-cart hidden-xs" />
                </Link>
              </form>
            </Navbar.Form>
            <Nav pullRight>
              <NavItem>
                <ButtonToolbar className="hidden-xs">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={ popOverBottom }>
                    <Button className="btn-block">Login</Button>
                  </OverlayTrigger>
                </ButtonToolbar>
                <Button className="btn-block btn-login-modal hidden-lg hidden-md hidden-sm visible-xs" onClick={ this.showModalLogin }>
                  Login
                </Button>
              </NavItem>
              <LinkContainer to="/register">
                <NavItem className="header-btn-register">Register</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ModalLogin showModal={ this.state.showModalLogin } hideModal={ this.hideModalLogin } />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    headerSearch: (input) => dispatch(header_search(input))
  }
}

export default connect(null, mapDispatchToProps) (withRouter(Header))