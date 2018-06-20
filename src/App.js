import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router'

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
import ForgotPassword from './containers/ForgotPassword'

import ChatListPeople from './components/chat-list-people'

class App extends Component {

  render() {
    const PrivateRouteMyProfile = ({ component: Component, ...rest }) => (
      <Route { ...rest } render={(props) => (
        localStorage.getItem('token') !== null
        ? <Component { ...props } />
        : <Redirect to="/" />
      )} />
    )

    const PrivateRouteJualBarang = ({ component: Component, ...rest }) => (
      <Route { ...rest } render={(props) => (
        localStorage.getItem('token') !== null
        ? <Component { ...props } />
        : <Redirect to={{
          pathname: '/login',
          state: {codes: 'jual barang'}
        }} />
      )} />
    )

    return (
      <div>
        <Route exact path="/" component={ Main } />
        <Route path="/register" component={ Register } />
        <Route path="/search-result=:result" component={ SearchResult } />
        <Route path="/:id_user/:id_produk/:nama_produk" component={ ProductItem } />
        <Route path="/detail-pesanan" component={ DetailPesanan } />
        <Route path="/pembayaran" component={ Pembayaran } />
        <Route path="/konfirmasi-pembayaran" component={ KonfirmasiPembayaran } />
        <Route path="/konfirmasi-cod" component={ KonfirmasiCod } />
        <Route path="/profile/:id_user/:nama_user" component={ ProfileSeller } />
        <Route path="/keranjang-belanja" component={ KeranjangBelanja } />
        <PrivateRouteMyProfile path="/profile/:id_user/:nama_user" component={ MyProfile } />
        <PrivateRouteJualBarang path="/jual-barang" component={ JualBarang } />
        <Route path="/login" component={ Login } />
        <Route path="/faq" component={ Faq } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <ChatListPeople />
      </div>
    );
  }
}

export default App;
