import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Main from './containers/Main'
import Register from './containers/Register'
import SearchResult from './containers/SearchResult'
import ProductItem from './containers/ProductItem'
import DetailPesanan from './containers/DetailPesanan'
import ProfileSeller from './containers/ProfileSeller'
import KeranjangBelanja from './containers/KeranjangBelanja'
import MyProfile from './containers/MyProfile'
import JualBarang from './containers/JualBarang'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={ Main } 
            />
            <Route path="/register" component={ Register } 
            />
            <Route path="/search-result=:result" component={ SearchResult } 
            />
            <Route path="/clothes/id/12345678" component={ ProductItem } />
            <Route path="/detail-pesanan" component={ DetailPesanan } />
            <Route path="/profile-seller" component={ ProfileSeller } />
            <Route path="/keranjang-belanja" component={ KeranjangBelanja } />
            <Route path="/my-profile" component={ MyProfile } />
            <Route path="/jual-barang" component={ JualBarang } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
