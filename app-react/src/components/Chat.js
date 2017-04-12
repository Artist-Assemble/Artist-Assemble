import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
    this.state = {
      chats: [],
      toggled: true
    }
  }

  // componentWillMount() {
  //   window.pusherChannel = window.pusher.subscribe('chat_' + this.props.params.collaboration);
  //   window.pusherChannel.bind('new_message', chat => {
  //     let chats = this.state.chats
  //     chats.push(chat)
  //     this.setState({chats: chats})
  //   })
  // }

  toggleChat() {
    if (this.state.toggled === true) {
      return this.setState({toggled: false})
    }
    else if (this.state.toggled === false)
      return this.setState({toggled: true})
  }

  render() {
    
    // let chats = this.state.chats.map((chat, index) => <p key={index} className="notification is-primary">{chat.body}</p>)

    return <div className="chat-cont">
      <div className="chats-cont" style={{display: this.state.toggled ? "none" : "block"}}>
        <div className="columns has-text-centered is-mobile">
          <div className="column is-4">
            <ul className="collab-list">
              <li>pam</li>
              <li>steve</li>
              <li>mike</li>
              <li>Carl</li>
            </ul>
          </div>
          <div className="column is-6">
            <ul>
              <li>Hey</li>
              <li>Hey there!</li>
            </ul>
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" placeholder="message"/>
              </p>
              <p className="control">
                <a className="button is-info chat-send-btn">
                  send
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-btn-cont">
        <div className="chat-btn has-text-centered" onClick={() => this.toggleChat()}>
          <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  }
}

export default Chat

// {chats}