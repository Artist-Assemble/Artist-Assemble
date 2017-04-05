import React from 'react'
import HeaderSub from './HeaderSub'

class SearchArtists extends React.Component {
    render() {
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
            <section className="results-cont">
                <div className="columns container has-text-centered">
                    <div className="column is-offset-3 is-6 is-mobile">
                        <div className="result-cont">
                            <div className="result-img-cont">
                                 <img src="http://lorempixel.com/400/400/people" className="result-img" alt="profile"/>
                            </div>
                            <div className="result-ratings-cont">
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