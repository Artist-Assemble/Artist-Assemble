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
        <div className="columns is-mobile msg-hdr">
          <div className="column is-offset-2 is-8 has-text-centered">
            <p className="msg-name">Dan</p>
          </div>
          <div className="column is-2 msg-close-cont">
            <img src="img/close.png" alt="close" className="collab-msg-close" onClick={() => this.setState({toggled: true})}/>
          </div>
        </div>
        <div className="columns has-text-centered is-mobile">
          <div className="column is-12 has-text-centered msg-cont">
            <p className="msg-from">Hey</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-to">Hey there!</p>
            <p className="msg-from">Wow tjasldkgasg a df dfg dfa ga fg a sga fgafg  fg afa s afg adfg a asf af ga fg afg   a fgdsdfgsfd?????? sdf sd f sdh  h f sf gsdfgsdfgsdfg  sdfgsd fg</p>
          </div>
        </div>
        <div className="columns has-text-centered is-mobile">
          <div className="column is-12 has-text-centered send-cont">
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
            <div className="field collab-upload-cont">
              <p className="contol">
                  <input type="file" className="Collab-uploadFile"/>
              </p>
              <a href="#">upload file</a>
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

// <div className="column is-1 attatch-cont">  
//    <img src="/img/attachment.png" className="attatchment" alt="upload attatchment"/>
// </div>