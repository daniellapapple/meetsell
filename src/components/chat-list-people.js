import React, { Component } from 'react'
import $ from 'jquery'

import ChatPeople from './chat-people'

class ChatListPeople extends Component {

  toggleChatList() {
    $('#body-chat-list-people').slideToggle()
  }

  render() {
    return (
      <div className="chat-list-people" id="chat-list-people">
        <ChatPeople />
        <div className="header-chat-list-people" id="header-chat-list-people" onClick={ this.toggleChatList }>
          <p>ini chat list people</p>
        </div>
        <div className="body-chat-list-people" id="body-chat-list-people">
          <p>Tony Start</p>
          <p>Tony Hawk</p>
        </div>
      </div>
    )
  }

}

export default ChatListPeople