import React from 'react'
import HeaderSub from './HeaderSub'
import Artist from './Artist'

class SearchArtists extends React.Component {
     constructor() {
        super();
        this.getArtists = this.getArtists.bind(this)
        this.getArtistValue = this.getArtistValue.bind(this)
        this.filterArtisttype = this.filterArtisttype.bind(this)
        this.filterArtistName = this.filterArtistName.bind(this)
        
        this.state = {
            artists: [],
            searchArtistValue: '',
            nameValue: ''
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

    getArtistValue(e) {
        this.setState({searchArtistValue: e.target.value}, () => this.filterArtisttype())
    }

    filterArtisttype() {
        // console.log(this.state.searchArtistValue)
        fetch('/api/users/search?q[' + this.state.searchArtistValue + '_true]=true')
        .then(response => response.json())
        .then(response => console.log(response))
        // .then(response => this.setState({artists: response}))
        // .then(response => console.log(this.state.artists))
    }

    filterArtistName() {
        fetch('/api/users/search?q[name_cont]=' + this.state.nameValue)
        .then(response => response.json())
        .then(response => this.setState({artists: response}))
        this.refs.nameSearch.value = ''
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        this.filterArtistName()
        }
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
                    <div className="column is-12-mobile is-offset-3-tablet is-6-tablet">
                     <div className="field">
                            <p className="control">
                                <span className="select">
                                <select className="search-art-type-select" onChange={(e)=> this.getArtistValue(e)}>
                                    <option disabled selected value>Artist Type</option>
                                    <option value="artist">singer/songwriter</option>
                                    <option value="producer">producer</option>
                                    <option value="engineer">mixing/mastering engineer</option>
                                </select>
                                </span>
                            </p>
                        </div>
                        <div className="has-text-centered">
                            <p className="search-or-p">- or -</p>
                        </div>
                        <div className="field has-addons search-field is-fullwidth">
                            <p className="control search-field">
                                <input className="input search-input" ref="nameSearch" type="text" placeholder="search artist by name" onChange={(e) => this.setState({nameValue: e.target.value})} onKeyPress={this._handleKeyPress}/>
                            </p>
                            <p className="control" onClick={() => this.filterArtistName()}>
                                <a className="button is-primary search-btn"><i className="fa fa-search" aria-hidden="true"></i> artists</a>
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