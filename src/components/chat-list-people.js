import React, { Component } from 'react'
import {
  FormControl,
  FormGroup
} from 'react-bootstrap'
import $ from 'jquery'

class ChatListPeople extends Component {

  toggleChatList() {
    $('#body-chat-list-people').slideToggle()
  }

  closeChat() {
    $('.chat-list-people').css({
      display: 'none'
    })
  }

  render() {
    return (
      <div className="chat-list-people" id="chat-list-people">
        <div className="header-chat-list-people" id="header-chat-list-people" onClick={ this.toggleChatList }>
          <p>
            Tatjana Shapira Online
            <span className="close-button" onClick={ this.closeChat }>x</span>
          </p>
        </div>
        <div className="body-chat-list-people" id="body-chat-list-people">
          <div className="chat-space">
            <p>Hi, how are you?</p>
          </div>
          <FormGroup>
            <FormControl type="text" placeholder="type your message..." />
          </FormGroup>
        </div>
      </div>
    )
  }

}

export default ChatListPeople