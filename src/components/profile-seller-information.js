import React, { Component } from 'react'
import {
  Col,
  Button
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import Check from '../assets/image/product-item-check.png'
import Location from '../assets/image/product-item-location.png'

class ProfileInformation extends Component {

  render() {
    return (
      <div className="profile-information-wrap">
        <div className="profile-information-header"></div>
        <img src="http://i0.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" className="profile-information-image-header" />
        <p className="profile-information-nama">
          Tatjana Shapira Online
        </p>
        <p className="profile-information-penjual-premium">
          <img src={ Check } alt="" />
          PENJUAL PREMIUM
        </p>
        <div className="profile-information-rating">
          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
          </fieldset>
          <span>(21 Ulasan)</span>
        </div>
        <div className="profile-information-alamat">
          <Col md={ 2 } sm={ 2 } xs={ 2 }>
            <img src={ Location } alt="" />
          </Col>
          <Col md={ 10 } sm={ 10 } xs={ 10 }>
            <p>Jln. MT Haryono, Pancoran Jakarta Selatan, Jakarta 1278</p>
          </Col>
        </div>
        <div className="profile-information-chat-penjual">
          <Button className="btn-block">Chat Penjual</Button>
        </div>
        <div className="profile-information-list-link">
          <ul>
            <li>
              <NavLink to="/profile-seller/semua-produk" activeClassName="is-active">Semua Produk</NavLink>
            </li>
            <li>
              <NavLink to="/profile-seller/produk-terlaris" activeClassName="is-active">Produk Terlaris</NavLink>
            </li>
            <li>
              <NavLink to="/profile-seller/review" activeClassName="is-active">Review</NavLink>
            </li>
            <li>
              <NavLink to="/profile-seller/laporkan" activeClassName="is-active">Laporkan</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default ProfileInformation