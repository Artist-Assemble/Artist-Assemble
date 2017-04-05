import React from 'react'
import { browserHistory } from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component';

class SearchArtists extends React.Component {
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
            <section className="search-cont">
                <div className="columns is-mobile has-text-centered">
                    <div className="column is-offset-3 is-6">
                        <div className="field has-addons search-field">
                            <p className="control">
                                <input className="input search-input" type="text" placeholder="genres, tags, names.."/>
                            </p>
                             <p className="control">
                                <span className="select">
                                <select className="search-filter">
                                    <option>filter</option>
                                    <option>sognwriters</option>
                                    <option>producers</option>
                                    <option>engineers</option>
                                </select>
                                </span>
                            </p>
                            <p className="control">
                                <a className="button is-primary search-btn"><i className="fa fa-search" aria-hidden="true"></i> artists 
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="results-cont" onClick={()=> browserHistory.push('/viewprofile')}>
                <div className="columns has-text-centered">
                    <div className="column is-offset-2 is-8 is-mobile">

            
                        <div className="columns result-cont is-mobile vertical">
                            <div className="column is-3 result-img-cont has-text-centered">
                                 <img src="http://lorempixel.com/400/400/people" className="result-img" alt="profile"/>
                            </div>
                            <div className="column is-4">
                                <p className="result-name">Steve George</p>
                                <ul className="tags">
                                    <li className="tag tag-pr">
                                        producer
                                    </li>
                                    <li className="tag tag-genre">
                                        edm
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-3result-ratings-cont">
                                <p >track:</p>
                                 <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}
                                /><br/>
                                <p>collaborations:</p>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}
                                />
                            </div>
                            <div className="column is-2">
                                <div className="shake-cont">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="temp-spacer"></div>

                        <div className="columns result-cont is-mobile vertical">
                            <div className="column is-3 result-img-cont has-text-centered">
                                 <img src="http://lorempixel.com/400/400/people" className="result-img" alt="profile"/>
                            </div>
                            <div className="column is-4">
                                <p className="result-name">Dan Dingus</p>
                                <ul className="tags">
                                    <li className="tag tag-en">
                                        engineer
                                    </li>
                                    <li className="tag tag-genre">
                                        pop
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-3result-ratings-cont">
                                <p >track:</p>
                                 <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}
                                /><br/>
                                <p>collaborations:</p>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}
                                />
                            </div>
                            <div className="column is-2">
                                <div className="shake-cont">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="temp-spacer"></div>

                        <div className="columns result-cont is-mobile vertical">
                            <div className="column is-3 result-img-cont has-text-centered">
                                 <img src="http://lorempixel.com/400/400/people" className="result-img" alt="profile"/>
                            </div>
                            <div className="column is-4">
                                <p className="result-name">Stacy Stace</p>
                                <ul className="tags">
                                    <li className="tag tag-si">
                                        songwriter
                                    </li>
                                    <li className="tag tag-genre">
                                        indie
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-3result-ratings-cont">
                                <p >track:</p>
                                 <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarOneClick={this.onStarOneClick.bind(this)}
                                /><br/>
                                <p>collaborations:</p>
                                <StarRatingComponent 
                                    name="rate2" 
                                    starCount={5}
                                    value={rating}
                                    onStarTwoClick={this.onStarTwoClick.bind(this)}
                                />
                            </div>
                            <div className="column is-2">
                                <div className="shake-cont">
                                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
        </div>
    }
}

export default SearchArtists