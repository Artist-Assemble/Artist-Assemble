import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chats: []
    }
  }

  componentWillMount() {
    window.pusherChannel.bind('new_message', chat => {
      let chats = this.state.chats
      chats.push(chat)
      this.setState({chats: chats})
    })
  }

  render() {
    let chats = this.state.chats.map((chat, index) => <p key={index} className="notification is-primary">{chat.message}</p>)

    return <div>
      {chats}
    </div>
  }
}

export default Chat