import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chats: []
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

  render() {
    let toggleChat = {}
    // let chats = this.state.chats.map((chat, index) => <p key={index} className="notification is-primary">{chat.body}</p>)

    return <div className="chat-cont">
      <div className="chats-cont" style={{display: "none"}}>
        <p>HReprehenderit  glossier pour-over, pok pok meh activated charcoal duis  kale chips.  Etsy ad consectetur, locavore meggings wolf biodiesel pug fap brunch meh.  Hashtag hella food truck placeat, shoreditch ad affogato letterpress leggings officia  chambray reprehenderit  consequat before they sold out.  Dolor  squid organic, chartreuse trust fund truffaut crucifix pabst vero eu  enim distillery kinfolk chillwave banh mi.  Typewriter asymmetrical fanny pack pinterest forage af.  Et migas veniam, blue bottle scenester williamsburg austin anim  food truck.  Cupidatat  delectus magna, cold-pressed cray tattooed sartorial XOXO fixie polaroid.</p>
      </div>
      <div className="chat-btn-cont">
        <div className="chat-btn has-text-centered" onClick={() => toggleChat}>
          <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  }
}

export default Chat

// {chats}