import React, { Component } from 'react'
import {
  Grid,
  Breadcrumb
} from 'react-bootstrap'

class ProfileBreadcrumb extends Component {

  render() {
    return (
      <Grid>
        <div className="profile-breadcrumb">
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

export default ProfileBreadcrumb