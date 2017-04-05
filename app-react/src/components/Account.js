import React from 'react'
// import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';


class Account extends React.Component {
     constructor() {
        super();

        this.state = {
            ratingOne: 1,
            ratingTwo: 1

        };
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
                            <p className="profile-bio bio-container">Hammock culpa odio, 8-bit tacos mlkshk veniam eu. Pour-over marfa stumptown elit vice ugh, cred excepteur. Synth YOLO sustainable non  ugh. Direct trade eu man bun shoreditch chia stumptown.</p>
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
                            <div className="tags-cont">
                                <ul className="tags">
                                    <li className="tag tag-si">singer/songwriter</li>
                                    <li className="tag tag-pr">producer</li>
                                    <li className=" tag tag-en" /*style={{display: 'none'}}*/>>engineer</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-6 collaborations">
                            <h1 className="collab-h">collaborations</h1>
                            <div className="colums has-text-centered collab-bar is-mobile">
                                <div className="collab-shake column is-2">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                                <div className="column is-8">
                                    <img src="http://lorempixel.com/400/400/people" className="collab-me" alt="me"/>
                                    <p className="collab-project">you and Dan's project</p>
                                      <img src="http://lorempixel.com/400/400/people" className="collab-you" alt="me"/>
                                </div>
                                <div className="collab-delete column is-2">
                                    <img src="img/close.png" alt="close"/>
                                </div>
                            </div>
                            <div className="colums has-text-centered collab-bar is-mobile">
                                <div className="collab-shake column is-2">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                                <div className="column is-8">
                                    <img src="http://lorempixel.com/400/400/people" className="collab-me" alt="me"/>
                                    <p className="collab-project">you and Michelles's project</p>
                                      <img src="http://lorempixel.com/400/400/people" className="collab-you" alt="me"/>
                                </div>
                                <div className="collab-delete column is-2">
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