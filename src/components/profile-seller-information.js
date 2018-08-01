import React, { Component } from 'react'
import {
  Col,
  Button
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import Env from '../lib/env';

import Check from '../assets/image/product-item-check.png'
import Location from '../assets/image/product-item-location.png'

class ProfileInformation extends Component {

  render() {
    let splitNama, joinNama, initialName;
    if (this.props.profileGuest.length > 0) {
      initialName = Env.getInitialName(this.props.profileGuest[0].data.data.name);
      splitNama = this.props.profileGuest[0].data.data.name.split(' ');
      joinNama = splitNama.join('-').toLowerCase();
    }

    return (
      <div className="profile-information-wrap">
        <div className="profile-information-header"></div>
        { this.props.profileGuest.length > 0 &&
          (this.props.profileGuest[0].data.data.photo_key !== null) ? <img src={ Env.urlS3(this.props.profileGuest[0].data.data.photo_key) } alt=""  className="profile-information-image-header" /> : <p className="initial-name">{ initialName }</p>
        }
        { this.props.profileGuest.length > 0 && <p className="profile-information-nama">
          { this.props.profileGuest[0].data.data.name }
        </p> }
        { this.props.profileGuest.length > 0 && <p className="profile-information-penjual-premium">
          <img src={ Check } alt="" />
          PENJUAL { this.props.profileGuest[0].data.data.type }
        </p> }
        <div className="profile-information-rating">
          <fieldset className="rating">
            <input type="radio" id="star5" name="ratin" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name="ratin" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name="ratin" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name="ratin" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name="ratin" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name="ratin" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name="ratin" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name="ratin" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name="ratin" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="ratin" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
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
              { this.props.profileGuest.length > 0 && <NavLink to={ `/profiles/${this.props.profileGuest[0].id}/${joinNama}/semua-produk` } activeClassName="is-active">Semua Produk</NavLink> }
            </li>
            <li>
              { this.props.profileGuest.length > 0 && <NavLink to={ `/profiles/${this.props.profileGuest[0].id}/${joinNama}/produk-terlaris` } activeClassName="is-active">Produk Terlaris</NavLink> }
            </li>
            <li>
              { this.props.profileGuest.length > 0 && <NavLink to={ `/profiles/${this.props.profileGuest[0].id}/${joinNama}/review` } activeClassName="is-active">Review</NavLink> }
            </li>
            <li>
              { this.props.profileGuest.length > 0 && <NavLink to={ `/profiles/${this.props.profileGuest[0].id}/${joinNama}/laporkan` } activeClassName="is-active">Laporkan</NavLink> }
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    profileGuest: state.userReducer.profileGuest
  }
}

export default connect(mapStateToProps)(ProfileInformation);