
import React from 'react'
// import { /*browserHistory,*/ Link} from 'react-router'

class Collaborations extends React.Component {

    render() {
        return <div className="columns has-text-centered collab-bar is-mobile">
            <div className="collab-shake column is-2" onClick={() => this.props.showChat(this.props.index)}>
                <i className="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="column is-9">
                <img src={this.props.user.photo.url} className="collab-me" alt="me"/>
                <p className="collab-project">you and {this.props.collaborator.name}'s project</p>
                    <img src={this.props.collaborator.photo.url ? this.props.collaborator.photo.url : "/img/user-default.png"} className="collab-you" alt="me"/>
            </div>
            <div className="collab-delete column is-1">
                <img src="img/close.png" alt="close"/>
            </div>
        </div>
    }
}

export default Collaborations







