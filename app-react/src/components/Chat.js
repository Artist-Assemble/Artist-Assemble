import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
    this.close = this.close.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.setupPusher = this.setupPusher.bind(this)

    this.state = {
      chats: props.messages,
      toggled: props.toggled || false,
      message: ''
    }
  }

  componentWillMount(props) {
    this.setupPusher(this.props)
  }

  componentWillReceiveProps(props) {
    this.setState({toggled: props.toggled || false, chats: props.messages})
    this.setupPusher(props)
  }

  setupPusher(props) {
    window.pusherChannel = window.pusher.subscribe('chat_' + props.id);
    window.pusherChannel.bind('new_message', chat => {
      let chats = this.state.chats
      chats.push(chat)

      this.setState({chats: chats})
    })
  }
  
  close() {
    this.setState({toggled: true})
    this.props.renderCollaborations()
  }

  sendMessage() {
      fetch('/api/collaborations/' + this.props.id + '/messages',{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            body: this.state.message,
            token: window.user.token
        })
      })
      .then(response => response.json())
      // .then(response => {console.log(response)})
  }

  toggleChat() {
    if (this.state.toggled === true) {
      return this.setState({toggled: false})
    }
    else if (this.state.toggled === false)
      return this.setState({toggled: true})
  }

  render() {
    let chats = this.state.chats.map((chat, index) => <p key={index} className={chat.user_id === window.user.id ? "msg-from" : "msg-to"}>{chat.body || '-'}</p>)

    return <div className="chat-cont">
      <div className="chats-cont" style={{display: this.state.toggled ? "none" : "block"}}>
        <div className="columns is-mobile msg-hdr">
          <div className="column is-offset-2 is-8 has-text-centered">
            <p className="msg-name">{this.props.collaborator.name}</p>
          </div>
          <div className="column is-2 msg-close-cont">
            <img src="img/close.png" alt="close" className="collab-msg-close" onClick={this.close}/>
          </div>
        </div>
        <div className="columns has-text-centered is-mobile">
          <div className="column is-12 has-text-centered msg-cont">
            {chats.reverse()}
          </div>
        </div>
        <div className="columns has-text-centered is-mobile">
          <div className="column is-12 has-text-centered send-cont">
            <div className="field has-addons">
              <p className="control">
                <input className="input" type="text" placeholder="message" onChange={(e) => this.setState({message: e.target.value})}/>
              </p>
              <p className="control">
                <a className="button is-info chat-send-btn" onClick={() => this.sendMessage()}>
                  send
                </a>
              </p>
            </div>
            <div className="field collab-upload-cont">
              <p className="contol">
                  <input type="file" className="Collab-uploadFile"/>
              </p>
              <a href="#">upload file</a>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
  }
}

export default Chat

// {chats}

// <div className="column is-1 attatch-cont">  
//    <img src="/img/attachment.png" className="attatchment" alt="upload attatchment"/>
// </div>