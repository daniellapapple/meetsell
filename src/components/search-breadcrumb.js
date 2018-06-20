import React, { Component } from 'react'
import {
  Grid,
  Breadcrumb
} from 'react-bootstrap'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'

class SearchBreadcrumb extends Component {

  constructor(props) {
    super(props)

    this.handleClickHome = this.handleClickHome.bind(this)
  }

  handleClickHome() {
    this.props.history.push('/')
  }

  render() {
    return (
      <Grid>
        <div className="search-result-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#" onClick={ this.handleClickHome }>
              <i className="fas fa-home"></i>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{ this.props.searchResult }</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Grid>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    inputKategori: state.searchReducer.kategoriSearch
  };
};

export default connect(mapStateToProps)(withRouter(SearchBreadcrumb));
// export default withRouter(SearchBreadcrumb);