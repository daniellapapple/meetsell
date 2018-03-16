import React, { Component } from 'react'

import Header from './Header'
import Jumbotron from './Jumbotron'
import BodyContent from './BodyContent'
import Footer from './Footer'

class Main extends Component {

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