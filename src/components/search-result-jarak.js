import React, { Component } from 'react'

class SearchResultJarak extends Component {

  render() {
    return (
      <div className="search-result-jarak">
        <p>JARAK</p>
        <div className="slider">
          <input type="range" min="0" max="100"/>
          <output id="rangevalue">2 Km</output>
        </div>
      </div>
    )
  }

}

export default SearchResultJarak