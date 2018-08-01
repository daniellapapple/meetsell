import React, { Component } from 'react'
import {
  FormControl,
  FormGroup
} from 'react-bootstrap'
import $ from 'jquery'
import { connect } from 'react-redux';

import { get_data_guest_api } from '../actions/userAction';

class ChatListPeople extends Component {

  constructor(props) {
    super(props);

    this.chatPeople = props.chatPeople;
  }

  componentDidMount() {
    // let idGuest = this.props.chatPenjualId;
    // console.log(idGuest, 'id guest profile')
    // this.props.getGuestProfile(idGuest);
  };

  render() {
    console.log(this.props.profileGuest, 'ini profile guest')

    return (
      <div className="chat-list-people-wrap">
        <div className="chat-list-people" id="chat-list-people1">
          <span className="close-button" onClick={ () => this.chatPeople.closeChatPeople(1) }>x</span>
          <div className="header-chat-list-people" id="header-chat-list-people" onClick={ () => this.chatPeople.toggleChatList() }>
            <p>
              Tatjana Shapira Online
            </p>
          </div>
          <div className="body-chat-list-people" id="chat1">
            <div className="chat-space">
              <p>Hi, how are you?</p>
            </div>
            <FormGroup>
              <FormControl type="text" placeholder="type your message..." />
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    chatPenjualId: state.userReducer.chatPenjualId,
    profileGuest: state.userReducer.profileGuest
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGuestProfile: (id) => dispatch(get_data_guest_api(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatListPeople);