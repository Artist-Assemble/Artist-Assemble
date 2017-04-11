import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chats: []
    }
  }

  componentWillMount() {
    // window.pusherChannel = window.pusher.subscribe('chat_' + this.props.params.collaboration);
    window.pusherChannel.bind('new_message', chat => {
      let chats = this.state.chats
      chats.push(chat)
      this.setState({chats: chats})
    })
  }

  render() {
    let chats = this.state.chats.map((chat, index) => <p key={index} className="notification is-primary">{chat.body}</p>)

    return <div>
      <div className="chats-cont" style={{display: "hidden"}}>
        {chats}
      </div>
      
    </div>
  }
}

export default Chat