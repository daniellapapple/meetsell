import React, { Component } from 'react'

import Header from './Header'
import Breadcrumb from '../components/search-breadcrumb'
import ResultPencarian from '../components/search-result-pencarian'
import BodyContent from '../components/search-result-bodyContent'
import Footer from './Footer'

class SearchResult extends Component {

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb 
          searchResult={ this.props.match.params.result }
        />
        <ResultPencarian searchResult={ this.props.match.params.result } />
        <BodyContent />
        <Footer />
      </div>
    )
  }

}

export default SearchResult