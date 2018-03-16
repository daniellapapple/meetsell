import React, { Component } from 'react'
import {
  Navbar,
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Nav,
  NavItem
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

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textInputSearch: '',
      kategori: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonSearch = this.handleButtonSearch.bind(this)
    this.handleKategori = this.handleKategori.bind(this)
    this.handleButtonJualBarang = this.handleButtonJualBarang.bind(this)
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
            <img src={ cart } alt="" width="30" className="header-icon-cart-top hidden-lg hidden-md hidden-sm" />
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
                <img src={ cart } alt="" width="30" className="header-icon-cart hidden-xs" />
              </form>
            </Navbar.Form>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavItem className="header-btn-register">Register</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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