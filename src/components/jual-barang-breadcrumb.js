import React, { Component } from 'react'
import {
  Grid,
  Breadcrumb
} from 'react-bootstrap'

class JualBarangBreadcrumb extends Component {

  render() {
    return (
      <Grid>
        <div className="jual-barang-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              <i className="fas fa-home"></i>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Grid>
    )
  }

}

export default JualBarangBreadcrumb