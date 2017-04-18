import React from 'react'
import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';
import Wavesurfer from 'react-wavesurfer'

class ViewProfile extends React.Component {
    constructor(props) {
        super(props)
        this.renderAccount = this.renderAccount.bind(this)
        this.sendCollab = this.sendCollab.bind(this)
        this.sendRating = this.sendRating.bind(this)
        this.handleTogglePlay = this.handleTogglePlay.bind(this)
        this.handlePosChange = this.handlePosChange.bind(this)

        this.state = {
            userProfile: {
                photo:{url: ''},
                audio:{url: ''}
            },
            rateTrack: 1,
            playing: false,
            pos: 0
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
        fetch('/api/collaborations/?token=' + user.token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({collaborator_id: this.props.params.user,
            status: true})
        })
    }

    sendRating() {
        var user = JSON.parse(sessionStorage.getItem('user'))
        fetch('/api/ratings/?token=' + user.token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user_id: this.state.userProfile.id,
            demo: this.state.rateTrack
            })
        })
    }

    componentWillMount() {
        this.renderAccount()
    }

    onRateTrackClick(nextValue, prevValue, name) {
        this.setState({rateTrack: nextValue});
        console.log(nextValue)
    }

    handleTogglePlay() {
        this.setState({playing: !this.state.playing});
    }

    handlePosChange(e) {
        this.setState({
        pos: e.originalArgs[0]
        });
    }

    render() {

        const { rating } = this.state;

        return <div>
            <header>
                <HeaderSub/>
            </header>
            <div className="back-cont profile-container" onClick={()=> browserHistory.push('/searchartists')}>
                <img src="/img/back-icon.png" className="back-icon" alt="back"/>
            </div>
            <div className="lines">
                <section className="profile-container">
                    <div className="columns has-text-centered profile">
                        <div className="column is-6">
                            <h1 className="profile-h">{this.state.userProfile.name}</h1>
                            <img src={this.state.userProfile.photo.url ? this.state.userProfile.photo.url : "/img/user-default.png"} alt="profile default" className="view-profile-img"/>
                            <p className="profile-bio bio-container">{this.state.userProfile.bio}</p>
                            <div className="ratings1">
                                <h2 className="rating-h1">demo:</h2>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    editing={false}
                                    renderStarIcon={() => 
                                        <span className="rating-space">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>}
                                    value={this.state.userProfile.demo_rating}
                                    starColor={"#FFFF19"}
                                    />
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
                        </div>
                        <div className="column is-6 vp-left">
                            <div className="userP-collab-cont has-text-centered">
                                <a href="#" className="button is-primary is-large userP-collab-btn" onClick={() => this.sendCollab()}>
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="profile-audio-cont">
                                 <Wavesurfer
                                    audioFile={this.state.userProfile.audio.url}
                                    pos={this.state.pos}
                                    onPosChange={this.handlePosChange}
                                    playing={this.state.playing}
                                    volume={1}
                                    audioRate={1}
                                    options={{
                                        height: 50,
                                        barWidth: 2,
                                        barHeight: 5,
                                        waveColor: "#FFFFFF",
                                        backend: 'MediaElement'
                                    }}/>
                            </div>
                             <div className="pause-play-cont" onClick={() => this.setState({playing:  !this.state.playing})}>
                                <i className={this.state.playing ? " fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
                            </div>
                            <div className="rate-cont">
                                <div className="ratings2">
                                    <h2 className="rate-track-h1">rate their track!{rating}</h2>
                                    <StarRatingComponent 
                                        name="rate3" 
                                        starCount={5}
                                        value={rating}
                                        renderStarIcon={() => 
                                        <span className="rating-space">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>}
                                        onStarClick={this.onRateTrackClick.bind(this)}
                                        starColor={"#FFFF19"}
                                        />
                                </div>
                                <div className="field rate-field-cont has-text-centered" onClick={() => this.sendRating()}>
                                    <a className="button rate-btn">
                                        rate
                                    </a>
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



// **SAVE FOR COLLAB RATING INTEGRATION**

//  <div  className="ratings2">
//     <h2 className="rating-h2">collaborations:</h2>
//     <StarRatingComponent 
//         name="rate2" 
//         starCount={5}
//         editing={false}
//         renderStarIcon={() => 
//             <span className="rating-space">
//                 <i className="fa fa-circle" aria-hidden="true"></i>
//             </span>}
//         value={4.5}
//         starColor={"#FFFF19"}/>
// </div>