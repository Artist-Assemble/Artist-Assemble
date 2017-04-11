import React from 'react'
import { /*browserHistory,*/ Link} from 'react-router'
import HeaderSub from './HeaderSub'
import StarRatingComponent from 'react-star-rating-component'
import Wavesurfer from 'react-wavesurfer'

class SearchArtists extends React.Component {
     constructor() {
        super();
        this.getArtists = this.getArtists.bind(this)
        this.state = {
            artists: [],
            ratingOne: 1,
            ratingTwo: 1,
            playing: false,
            pos: 0
        };
    }

    componentWillMount() {
        this.getArtists()
    }

    // componentDidMount() {
    //     setTimeout(() => this.setState({playing: true}), 1000)
    // }

    getArtists() {
        fetch('/api/users')
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({artists: response}))
        .then(response => console.log(this.state.artists))
    }

    onStarOneClick(nextValue, prevValue, name) {
        this.setState({ratingOne: nextValue});
    }

    onStarTwoClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    handleTogglePlay() {
        this.setState({
        playing: !this.state.playing
        });
    }
    handlePosChange(e) {
        this.setState({
        pos: e.originalArgs[0]
        });
    }

    render() {
        const { rating } = this.state;

    

        let artists = this.state.artists.map((artist, key) => {
            return <div className="result-cont" key={key}>
                <div className="columns  vertical">
                    <div className="column is-3 result-img-cont has-text-centered">
                        <img src={artist.photo.url ? artist.photo.url : "/img/user-default.png"}className="result-img" alt="profile"/>
                    </div>
                    <div className="column is-2">
                    <ul className="tags search-tag-cont has-text-centered">
                            <li className="tag search-tag tag-si" style={ artist.artist ? { display:'inline-flex'} : {display : 'none'}}>
                                songwriter
                            </li>
                            <li className="tag search-tag tag-pr" style={ artist.producer ? { display:'inline-flex'} : {display :  'none'}}>
                                producer
                            </li>
                            <li className="tag search-tag tag-en" style={ artist.engineer ? { display:'inline-flex'} : {display : 'none'}}>
                                engineer
                            </li>
                        </ul>
                    </div>
                    <div className="column is-3">
                        <p className="result-name">{artist.name}</p>
                        <ul className="tags">
                            <li className="tag tag-genre">
                                {artist.tags ? artist.tags[0].name : ""}
                            </li>
                        </ul>
                    </div>
                    <div className="column is-2 result-ratings-cont">
                        <p >track:</p>
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarOneClick={this.onStarOneClick.bind(this)}/><br/>
                        <p>collaborations:</p>
                        <StarRatingComponent 
                            name="rate2" 
                            starCount={5}
                            value={rating}
                            onStarTwoClick={this.onStarTwoClick.bind(this)}/>
                    </div>
                    <div className="column is-2">
                        <Link to={'api/user/' + artist.id }>
                            <div className="next-cont">
                                <img src="img/arrow-right.png" alt="view profile"/>
                            </div>
                        </Link>
                    </div>
                </div>
                        <Wavesurfer
                        audioFile={artist.audio.url ? artist.audio.url: 'audio/audio.wav'}
                        pos={this.state.pos}
                        onPosChange={this.handlePosChange}
                        playing={this.state.playing}
                        volume={1}
                        audioRate={1}
                        options={{
                            height: 50,
                            barWidth: 2,
                            barHeight: 5,
                            waveColor: "#FFFFFF"
                        }}
                    />
                <div className="pause-play-cont" onClick={() => this.setState({playing: true})}>
                    <i className={this.state.playing ? " fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
                </div>
            </div>
        })

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
                <div className="columns has-text-centered">
                    <div className="column is-offset-2 is-8">

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