import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import { connect } from 'react-redux';

import { get_data_guest_api } from '../actions/userAction';

import Information from './profile-seller-information'
import SemuaProduk from './profile-seller-semua-produk'

class ProfileSellerContentSemuaProduk extends Component {

  componentDidMount() {
    let idUser = this.props.match.params.id_user;
    this.props.get_profile_guest(idUser);
  };

  render() {
    return (
      <div className="profile-seller-content-semua-produk">
        <Grid>
          <Row>
            <Col md={ 3 }>
              <Information />
            </Col>
            <Col md={ 9 }>
              <SemuaProduk />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    get_profile_guest: (id) => dispatch(get_data_guest_api(id))
  }
};

export default connect(null, mapDispatchToProps)(ProfileSellerContentSemuaProduk);