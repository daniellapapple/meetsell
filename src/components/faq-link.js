import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'

class FaqLink extends Component {

  render() {
    return (
      <div>
        <div className="faq-title-link">
          <p>MEETSELL</p>
        </div>
        <div className="faq-link-item">
          <ul>
            <li>
              <NavLink 
                to="/faq/tentang-kami" activeClassName="is-active"
              >Tentang Kami</NavLink>
            </li>
            <li>
              <NavLink
                to="/faq/privacy-policy"
                activeClassName="is-active"
              >Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink
                to="/faq/aturan-penggunaan"
                activeClassName="is-active"
              >Aturan Penggunaan</NavLink>
            </li>
          </ul>
        </div>
        <div className="faq-title-link">
          <p>BANTUAN</p>
        </div>
        <div className="faq-link-item">
          <ul>
            <li>
              <NavLink
                to="/faq/pembeli"
                activeClassName="is-active"
              >Pembeli</NavLink>
            </li>
            <li>
              <NavLink
                to="/faq/penjual"
                activeClassName="is-active"
              >Penjual</NavLink>
            </li>
            <li>
              <NavLink
                to="/faq/tata-cara-penjual"
                activeClassName="is-active"
              >Tata Cara Penjual</NavLink>
            </li>
            <li>
              <NavLink
                to="/faq/tata-cara-pembeli"
                activeClassName="is-active"
              >Tata Cara Pembeli</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default FaqLink