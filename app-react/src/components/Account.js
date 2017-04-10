import React from 'react'
// import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class Account extends React.Component {
     constructor() {
        super();
        this.renderAccount = this.renderAccount.bind(this)
        this.state = {
            content: []

        };
    }

    renderAccount() {  
        // console.log(window.user)
        fetch('/api/users/' + window.user.id)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({content: response}))
            .then(response => console.log(this.state.content))

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
            <div className="lines">
                <section className="profile-container">
                    <div className="columns has-text-centered profile">
                        <div className="column is-6">
                            <h1 className="profile-h">profile</h1>
                            <img src="img/profile-default.png" alt="profile default" className="profile-img"/>
                            <ImagesUploader
                                url="http://localhost:9090/notmultiple"
                                optimisticPreviews
                                multiple={false}
                                onLoadEnd={(err) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                }}
                                label="Upload a picture"
                            />
                            <p className="profile-bio bio-container">{this.state.content.bio}</p>
                            <div className="ratings1">
                                <h2 className="rating-h1">my demo: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}
                                />
                            </div>
                            <div  className="ratings2">
                                <h2 className="rating-h2">my collaborations: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}
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
                            <div className="columns has-text-centered collab-bar is-mobile">
                                <div className="collab-shake column is-2">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                                <div className="column is-9">
                                    <img src="http://lorempixel.com/400/400/people" className="collab-me" alt="me"/>
                                    <p className="collab-project">you and Dan's project</p>
                                      <img src="http://lorempixel.com/400/400/people" className="collab-you" alt="me"/>
                                </div>
                                <div className="collab-delete column is-1">
                                    <img src="img/close.png" alt="close"/>
                                </div>
                            </div>
                            <div className="columns has-text-centered collab-bar is-mobile">
                                <div className="collab-shake column is-2">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                                <div className="column is-9">
                                    <img src="http://lorempixel.com/400/400/people" className="collab-me" alt="me"/>
                                    <p className="collab-project">you and Michelles's project</p>
                                      <img src="http://lorempixel.com/400/400/people" className="collab-you" alt="me"/>
                                </div>
                                <div className="collab-delete column is-1">
                                    <img src="img/close.png" alt="close"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Account

// {this.state.content.tags[0].name}