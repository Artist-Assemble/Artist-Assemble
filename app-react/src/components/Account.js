import React from 'react'
// import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';
import Chat from './Chat'
import Collaborations from './Collaborations'


class Account extends React.Component {
     constructor() {
        super();
        this.renderAccount = this.renderAccount.bind(this)
        this.renderCollaborations = this.renderCollaborations.bind(this)
        this.postPhoto = this.postPhoto.bind(this)
        this.showChat = this.showChat.bind(this)
        this.deleteCollab = this.deleteCollab.bind(this)

        this.state = {
            content: {
                photo:{url: ''},
                audio:{url: ''}
            },
            collaborations: [],
            currentCollaboration: null
        };
    }

    renderAccount() {  
        // console.log(window.user)
        fetch('/api/users/' + window.user.id)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({content: response}))
            // .then(response => console.log(this.state.content))
    }

    renderCollaborations() {
        // console.log(window.user.token)
        fetch('/api/users/' + window.user.id + '/collaborations/?token=' + window.user.token)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({collaborations: response, currentCollaboration: null}))
            .then(response => console.log(this.state.collaborations))
    }

    componentWillMount() {
        this.renderAccount()
        this.renderCollaborations()
    }

    postPhoto(e) {
        var user = JSON.parse(sessionStorage.getItem('user'))
        var data = new FormData()
        data.append('photo', e.target.files[0])
        fetch('/api/users/' + this.state.content.id + '?token=' + user.token, {
        method: 'PUT',
        body: data
        })
        .then(response => this.renderAccount())
    }

    showChat(index) {
        this.setState({currentCollaboration: index})
    }

    deleteCollab(collabId) {
        fetch('/api/collaborations/' + collabId + '/?token=' + window.user.token, {
        method: 'DELETE'})
            .then(response => response.json())
            .then(response => this.renderCollaborations())
    }
    
    render() {
        let myCollabs = this.state.collaborations.map((collaboration, index) => <Collaborations key={index} index={index} {...collaboration} showChat={this.showChat} deleteCollab={this.deleteCollab}/>)

        const { rating } = this.state;
        return <div>
            <header>
                <HeaderSub/>
            </header>
            <div className="lines">
                <section className="profile-container">
                    <div className="columns has-text-centered profile">
                        <div className="column is-6">
                            <h1 className="profile-h">profile</h1>
                            <div className="field upload-cont">
                                <p className="contol profile-img" style={{backgroundImage: 'url(' + (this.state.content.photo.url ? this.state.content.photo.url : "/img/profile-default.png") + ')'}}> 
                                    <input type="file" className="uploadFile" onChange={(e) => this.postPhoto(e)}/>
                                </p>
                            </div>
                            <p className="profile-bio bio-container">{this.state.content.bio}</p>
                            <div className="ratings1">
                                <h2 className="rating-h1">my track: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    editing={false}
                                    renderStarIcon={() => 
                                        <span className="rating-space">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>}
                                    value={4.5}
                                    starColor={"#F1FF1C"}
                                />
                            </div>
                           
                            <div className="tags-cont has-text-centered">
                                <ul className="tags">
                                    <li className="tag tag-si" style={ this.state.content.artist ? { display:'inline-flex'} : {display : 'none'}}>singer/songwriter</li>
                                    <li className="tag tag-pr" style={ this.state.content.producer ? { display:'inline-flex'} : {display : 'none'}}>producer</li>
                                    <li className=" tag tag-en" style={ this.state.content.engineer ? { display:'inline-flex'} : {display : 'none'}}>engineer</li>
                                </ul>
                                <ul className="genres tags">
                                    <li className="genre tag">{this.state.content.tags ? this.state.content.tags[0].name : ""}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-6 collaborations">
                            <h1 className="collab-h">collaborations</h1>
                            {myCollabs}
                        </div>
                    </div>
                    {this.state.currentCollaboration !== null ? <Chat {...this.state.collaborations[this.state.currentCollaboration]} renderCollaborations={this.renderCollaborations} toggled={false} /> : ''}
                </section>
            </div>
        </div>
    }
}

export default Account


//  <div  className="ratings2">
//     <h2 className="rating-h2">my collaborations: {rating}</h2>
//     <StarRatingComponent 
//         name="rate2" 
//         starCount={5}
//         editing={false}
//         renderStarIcon={() => 
//             <span className="rating-space">
//                 <i className="fa fa-circle" aria-hidden="true"></i>
//             </span>}
//         value={5}
//         starColor={"#F1FF1C"}
//     />
// </div>