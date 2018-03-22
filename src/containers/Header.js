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
import { get_data_user } from '../actions/headerLoginAction'

import logo from '../assets/image/logo/logo-1.1.png'
import pic1 from '../assets/image/jual-barang-camera-1.1.png'
import cart from '../assets/image/icon-cart.png'
import wallet from '../assets/image/wallet.png'

import ModalLogin from '../components/navbar-header-login-modal'
import MyProfileModal from '../components/navbar-my-profile-modal'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emailInputan: '',
      passwordInputan: '',
      textInputSearch: '',
      kategori: '',
      wrongInputan: '',
      showModalLogin: false,
      showModalMyProfile: false,
      dataUser: [{
        'name': localStorage.getItem('name'),
        'phone': localStorage.getItem('phone'),
        'phone_code': localStorage.getItem('phone_code'),
        'photo_key': localStorage.getItem('photo_key'),
        'email': localStorage.getItem('email'),
        'lat': localStorage.getItem('lat'),
        'lng': localStorage.getItem('lng')
      }]
    }

    this.handleInputEmailLogin = this.handleInputEmailLogin.bind(this)
    this.handleInputPasswordLogin = this.handleInputPasswordLogin.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
    this.getDataLogin = this.getDataLogin.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonSearch = this.handleButtonSearch.bind(this)
    this.handleKategori = this.handleKategori.bind(this)
    this.handleButtonJualBarang = this.handleButtonJualBarang.bind(this)
    this.showModalLogin = this.showModalLogin.bind(this)
    this.hideModalLogin = this.hideModalLogin.bind(this)
    this.showModalMyProfile = this.showModalMyProfile.bind(this)
    this.hideModalMyProfile = this.hideModalMyProfile.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleInputEmailLogin(e) {
    this.setState({
      emailInputan: e.target.value
    })
  }

  handleInputPasswordLogin(e) {
    this.setState({
      passwordInputan: e.target.value
    })
  }

  async handleSubmitLogin(e) {
    e.preventDefault()
    var button = document.querySelector('#loadButton')
    button.classList.add('load')
    setTimeout(async () => {
      let fetch_login = await fetch(process.env.REACT_APP_MEET_API + 'login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': this.state.emailInputan,
          'password': this.state.passwordInputan
        })
      })

      let resJson = await fetch_login.json()
      console.log(resJson)

      if (resJson.data !== null) {
        localStorage.setItem('qwerty', resJson.data.token)
        localStorage.setItem('name', resJson.data.name)
        localStorage.setItem('email', resJson.data.email)
        localStorage.setItem('phone', resJson.data.phone)
        localStorage.setItem('phone_code', resJson.data.phone_code)
        localStorage.setItem('photo_key', resJson.data.photo_key)
        localStorage.setItem('lat', resJson.data.lat)
        localStorage.setItem('lng', resJson.data.lng)
        this.props.getDataUser(resJson.data)
        this.getDataLogin(resJson.data.name, resJson.data.email, resJson.data.phone, resJson.data.phone_code, resJson.data.photo_key, resJson.data.lat, resJson.data.lng)
        this.hideModalLogin()
      } else {
        button.classList.remove('load')
        this.setState({
          wrongInputan: 'Email/Password Anda masukkan salah!'
        })
      }
    }, 1500)
  }

  getDataLogin(name, email, phone, phone_code, photo_key, lat, lng) {
    this.setState({
      dataUser: [{
        'name': name,
        'phone': phone,
        'phone_code': phone_code,
        'photo_key': photo_key,
        'email': email,
        'lat': lat,
        'lng': lng
      }]
    })
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

  showModalMyProfile() {
    this.setState({
      showModalMyProfile: true
    })
  }

  hideModalMyProfile() {
    this.setState({
      showModalMyProfile: false
    })
  }

  logout() {
    var button = document.querySelector('#loadATag')
    button.classList.add('load')
    setTimeout(() => {
      localStorage.clear()
      this.setState({
        dataUser: [{
          'name': null,
          'phone': null,
          'phone_code': null,
          'photo_key': null,
          'email': null,
          'lat': null,
          'lng': null
        }]
      })
      this.hideModalMyProfile()
    }, 1500)
  }

  render() {
    let photo_user
    if (this.state.dataUser[0].photo_key === 'null' || this.state.dataUser[0].photo_key === null) {
      photo_user = <i className="far fa-user"></i>
    } else {
      photo_user = <img src={ this.state.dataUser[0].photo_key } alt="" width="30" />
    }

    const popOverBottomLogin = (
      <Popover id="popover-positioned-bottom-before-login">
        <Col md={ 12 }>
          <form onSubmit={ this.handleSubmitLogin }>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="far fa-envelope"></i>
                </InputGroup.Addon>
                <FormControl type="text" placeholder="Email" onChange={ this.handleInputEmailLogin } />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <i className="fas fa-unlock"></i>
                </InputGroup.Addon>
                <FormControl type="password" placeholder="Password" onChange={ this.handleInputPasswordLogin } />
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
            <div className="navbar-login-notif-wrong">
              <p>{ this.state.wrongInputan }</p>
            </div>
            <Button type="submit" className="btn-block btn-masuk-navbar" id="loadButton">Masuk</Button>
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

    const popOverBottomAfterLogin = (
      <Popover id="popover-positioned-bottom-after-login">
        <Col md={ 12 } className="colom-popover-bottom-afterLogin">
          <div className="header-profile-name">
            <p className="name-profile-header">
              { localStorage.getItem('name') }
            </p>
            <p className="wallet-profile-header">
              <img src={ wallet } alt="" width="20" />
              Rp 109.000
            </p>
            <ul className="ul-header-profile">
              <li>
                <Link to="/my-profile/produk-dibeli">Produk Dibeli</Link>
              </li>
              <li>
                <Link to="/my-profile/produk-dijual">Produk Dijual</Link>
              </li>
              <li>
                <Link to="/my-profile/review">Review</Link>
              </li>
              <li>
                <Link to="/my-profile/chat">Chat</Link>
              </li>
              <li>
                <Link to="/my-profile/wishlist">Wishlist</Link>
              </li>
              <li>
                <a onClick={ this.logout } id="loadATag">Logout</a>
              </li>
            </ul>
          </div>
        </Col>
      </Popover>
    )

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
            { this.state.dataUser[0].name === null && <Nav pullRight>
              <NavItem>
                <ButtonToolbar className="hidden-xs">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={ popOverBottomLogin }>
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
            </Nav> }
            { this.state.dataUser[0].name !== null && <Nav pullRight>
              <NavItem>
                <ButtonToolbar className="hidden-xs">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={ popOverBottomAfterLogin }>
                    <Button className="btn-block header-btn-user">
                      { this.state.dataUser[0].name }
                      { photo_user }
                    </Button>
                  </OverlayTrigger>
                </ButtonToolbar>
                <Button className="btn-block btn-login-modal hidden-lg hidden-md hidden-sm visible-xs" onClick={ this.showModalMyProfile }>
                  { this.state.dataUser[0].name }
                  { photo_user }
                </Button>
              </NavItem>
            </Nav> }
          </Navbar.Collapse>
        </Navbar>
        <ModalLogin 
          showModal={ this.state.showModalLogin } 
          hideModal={ this.hideModalLogin }
          emailInput={ this.handleInputEmailLogin }
          passwordInput={ this.handleInputPasswordLogin }
          submitLogin={ this.handleSubmitLogin }
          wrongInputan={ this.state.wrongInputan }
        />
        <MyProfileModal 
          showModal={ this.state.showModalMyProfile }   hideModal={ this.hideModalMyProfile } 
          logout={ this.logout } 
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    data_user: state.HeaderLoginReducer.dataUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    headerSearch: (input) => dispatch(header_search(input)),
    getDataUser: (data) => dispatch(get_data_user(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Header))