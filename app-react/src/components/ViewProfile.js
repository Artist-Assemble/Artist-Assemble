import React from 'react'
import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';

class ViewProfile extends React.Component {
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
            <div className="back-cont" onClick={()=> browserHistory.push('/searchartists')}>
                <img src="img/back-icon.png" className="back-icon" alt="back"/>
            </div>
            <div className="lines">
                <section className="profile-container">
                    <div className="columns has-text-centered profile">
                        <div className="column is-offset-2 is-8">
                            <h1 className="profile-h">Dingle Dan</h1>
                            <img src="http://lorempixel.com/400/400/people" alt="profile default" className="view-profile-img"/>
                            <p className="profile-bio bio-container">Hammock culpa odio, 8-bit tacos mlkshk veniam eu. Pour-over marfa stumptown elit vice ugh, cred excepteur. Synth YOLO sustainable non  ugh. Direct trade eu man bun shoreditch chia stumptown.</p>
                            <div className="ratings1">
                                <h2 className="rating-h1">demo: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}
                                />
                            </div>
                            <div  className="ratings2">
                                <h2 className="rating-h2">collaborations: {rating}</h2>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}
                                />
                            </div>
                            <div className="tags-cont has-text-centered">
                                <ul className="tags">
                                    <li className="tag tag-si">singer/songwriter</li>
                                    <li className="tag tag-pr">producer</li>
                                    <li className=" tag tag-en" /*style={{display: 'none'}}*/>engineer</li>
                                </ul>
                                <ul className="genres tags">
                                    <li className="genre tag" /*style={{display: 'none'}}*/>electronic</li>
                                </ul>
                            </div>
                            <div className="rate-cont">
                                 <div className="ratings1">
                                    <h2 className="rate-track-h1">rate their track!{rating}</h2>
                                    <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={rating}
                                        onStarOneClick={this.onStarOneClick.bind(this)}
                                    />
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