import React, { Component } from 'react'

class SearchResultKategori extends Component {

  render() {
    return (
      <div className="search-result-kategori">
        <p>KATEGORI</p>
        <ul>
          <li>
            <a href="#hpAndGagdet">Handphone dan Gadget</a>
          </li>
          <li>
            <a href="#motor">Motor</a>
          </li>
          <li>
            <a href="#car">Car</a>
          </li>
          <li>
            <a href="#fashion">Fashion</a>
          </li>
          <li>
            <a href="#homeAppliance">Home Appliance</a>
          </li>
          <li>
            <a href="#hobbie">Hobbie</a>
          </li>
          <li>
            <a href="#babyAndKid">Baby and Kid</a>
          </li>
          <li>
            <a href="#others">Others</a>
          </li>
        </ul>
      </div>
    )
  }

}

export default SearchResultKategori