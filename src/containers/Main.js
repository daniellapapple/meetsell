import React, { Component } from 'react'

import Header from './Header'
import Jumbotron from './Jumbotron'
import BodyContent from './BodyContent'
import Footer from './Footer'

class Main extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <BodyContent />
        <Footer />
      </div>
    )
  }

}

export default Main