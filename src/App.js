import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router'
import { withRouter } from 'react-router-dom'

import Main from './containers/Main'
import Register from './containers/Register'
import SearchResult from './containers/SearchResult'
import ProductItem from './containers/ProductItem'
import DetailPesanan from './containers/DetailPesanan'
import Pembayaran from './containers/Pembayaran'
import KonfirmasiPembayaran from './containers/KonfirmasiPembayaran'
import KonfirmasiCod from './containers/KonfirmasiCod'
import ProfileSeller from './containers/ProfileSeller'
import KeranjangBelanja from './containers/KeranjangBelanja'
import MyProfile from './containers/MyProfile'
import JualBarang from './containers/JualBarang'
import Login from './containers/Login'
import Faq from './containers/Faq'

import ChatListPeople from './components/chat-list-people'

class App extends Component {

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route { ...rest } render={(props) => (
        localStorage.getItem('qwerty') !== null
        ? <Component { ...props } />
        : <Redirect to="/" />
      )} />
    )

    return (
      <div>
        <Route exact path="/" component={ Main } />
        <Route path="/register" component={ Register } />
        <Route path="/search-result=:result" component={ SearchResult } />
        <Route path="/clothes/id/12345678" component={ ProductItem } />
        <Route path="/detail-pesanan" component={ DetailPesanan } />
        <Route path="/pembayaran" component={ Pembayaran } />
        <Route path="/konfirmasi-pembayaran" component={ KonfirmasiPembayaran } />
        <Route path="/konfirmasi-cod" component={ KonfirmasiCod } />
        <Route path="/profile-seller" component={ ProfileSeller } />
        <Route path="/keranjang-belanja" component={ KeranjangBelanja } />
        <PrivateRoute path="/my-profile" component={ MyProfile } />
        <Route path="/jual-barang" component={ JualBarang } />
        <Route path="/login" component={ Login } />
        <Route path="/faq" component={ Faq } />
        <ChatListPeople />
      </div>
    );
  }
}

export default withRouter(App);
