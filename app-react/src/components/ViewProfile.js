import React from 'react'
import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';

class ViewProfile extends React.Component {
    constructor(props) {
        super(props)
        this.renderAccount = this.renderAccount.bind(this)
        this.sendCollab = this.sendCollab.bind(this)

        this.state = {
            userProfile: {
                photo:{url: ''},
                audio:{url: ''}
            },
            ratingOne: 1,
            ratingTwo: 1
        };
    }

    renderAccount() {  
        // console.log(window.user)
        fetch('/api/users/' + this.props.params.user)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({userProfile: response}))
            .then(response => console.log(this.state.userProfile))
    }

    sendCollab() {
        var user = JSON.parse(sessionStorage.getItem('user'))
        fetch('/api/users/' + '?token=' + user.token, {
        method: 'PUT',
        status: true,
        callaborate_id: this.props.params.id
        })
    }

    componentWillMount() {
        this.renderAccount()
    }

    onStarOneClick(nextValue, prevValue, name) {
        this.setState({ratingOne: nextValue});
    }

    onStarTwoClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {

        const { rating } = this.state;

        return <div>
            <header>
                <HeaderSub/>
            </header>
            <div className="back-cont" onClick={()=> browserHistory.push('/searchartists')}>
                <img src="/img/back-icon.png" className="back-icon" alt="back"/>
            </div>
            <div className="lines">
                <section className="profile-container">
                    <div className="columns has-text-centered profile">
                        <div className="column is-offset-2 is-8">
                            <h1 className="profile-h">{this.state.userProfile.name}</h1>
                            <img src={this.state.userProfile.photo.url ? this.state.userProfile.photo.url : "/img/user-default.png"} alt="profile default" className="view-profile-img"/>
                            <p className="profile-bio bio-container">{this.state.userProfile.bio}</p>
                            <div className="ratings1">
                                <h2 className="rating-h1">demo: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}/>
                            </div>
                            <div  className="ratings2">
                                <h2 className="rating-h2">collaborations: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}/>
                            </div>
                            <div className="tags-cont has-text-centered">
                                <ul className="tags">
                                    <li className="tag tag-si" style={ this.state.userProfile.artist ? { display:'inline-flex'} : {display : 'none'}}>singer/songwriter</li>
                                    <li className="tag tag-pr" style={ this.state.userProfile.producer ? { display:'inline-flex'} : {display : 'none'}}>producer</li>
                                    <li className=" tag tag-en" style={ this.state.userProfile.engineer ? { display:'inline-flex'} : {display : 'none'}}>engineer</li>
                                </ul>
                                <ul className="genres tags">
                                    <li className="genre tag">{this.state.userProfile.tags ? this.state.userProfile.tags[0].name : ""}</li>
                                </ul>
                            </div>
                            <div className="userP-collab-cont has-text-centered">
                                <a href="#" className="button is-primary is-large userP-collab-btn" onClick={this.sendCollab()}>
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="rate-cont">
                                 <div className="ratings1">
                                    <h2 className="rate-track-h1">rate their track!{rating}</h2>
                                    <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={rating}
                                        onStarOneClick={this.onStarOneClick.bind(this)}/>
                                </div>
                                <div className="field">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="leave a comment (optional)"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default ViewProfile