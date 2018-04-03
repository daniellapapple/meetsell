import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SearchResultKategori extends Component {

  render() {
    return (
      <div className="search-result-kategori">
        <p>KATEGORI</p>
        <ul>
          <li>
            <NavLink to="/search-result=gadget" activeClassName="is-active">
              Gadget
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=clothes" activeClassName="is-active">
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=house" activeClassName="is-active">
              House
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=cars" activeClassName="is-active">
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=motors" activeClassName="is-active">
              Motors
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=hobbie" activeClassName="is-active">
              Hobbie
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=books" activeClassName="is-active">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=child" activeClassName="is-active">
              Child
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-result=others" activeClassName="is-active">
              Others
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }

}

export default SearchResultKategori