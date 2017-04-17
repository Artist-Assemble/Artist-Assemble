import React from 'react'
import HeaderSub from './HeaderSub'
import Artist from './Artist'

class SearchArtists extends React.Component {
     constructor() {
        super();
        this.getArtists = this.getArtists.bind(this)
        
        this.state = {
            artists: []
        };
    }

    componentWillMount() {
        this.getArtists()
    }

    getArtists() {
        fetch('/api/users')
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({artists: response}))
        .then(response => console.log(this.state.artists))
    }

    render() {
        let artists = this.state.artists.map((artist, key) => <Artist key={key} {...artist} />)

        return <div>
        <header>
            <HeaderSub/>
        </header>
        <div className="search-lines">
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
                <div className="columns has-text-centered">
                    <div className="column is-12-tablet is-offset-1-desktop is-10-desktop is-offset-2-widescreen is-8-widescreen">

                    {artists}

                    </div>
                </div>
            </section>
        </div>
        </div>
    }
}

export default SearchArtists

// <Link to={'api/user/' + artist.id } key={key}>