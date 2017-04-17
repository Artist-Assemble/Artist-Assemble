import React from 'react'
import { /*browserHistory,*/ Link} from 'react-router'
import StarRatingComponent from 'react-star-rating-component'
import Wavesurfer from 'react-wavesurfer'

class Artist extends React.Component {
    constructor(props) {
        super(props)
        this.onStarOneClick = this.onStarOneClick.bind(this)
        this.onStarTwoClick = this.onStarTwoClick.bind(this)
        this.handleTogglePlay = this.handleTogglePlay.bind(this)
        this.handlePosChange = this.handlePosChange.bind(this)

        this.state = {
            ratingOne: 1,
            ratingTwo: 1,
            playing: false,
            pos: 0
        }
    }

    onStarOneClick(nextValue, prevValue, name) {
        this.setState({ratingOne: nextValue});
    }

    onStarTwoClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
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

        return <div className="result-cont">
            <div className="columns  vertical">
                <div className="column is-3 result-img-cont has-text-centered">
                    <img src={this.props.photo.url ? this.props.photo.url : "/img/user-default.png"}className="result-img" alt="profile"/>
                </div>
                <div className="column is-2">
                <ul className="tags search-tag-cont has-text-centered">
                        <li className="tag search-tag tag-si" style={ this.props.artist ? { display:'inline-flex'} : {display : 'none'}}>
                            songwriter
                        </li>
                        <li className="tag search-tag tag-pr" style={ this.props.producer ? { display:'inline-flex'} : {display :  'none'}}>
                            producer
                        </li>
                        <li className="tag search-tag tag-en" style={ this.props.engineer ? { display:'inline-flex'} : {display : 'none'}}>
                            engineer
                        </li>
                    </ul>
                </div>
                <div className="column is-3">
                    <p className="result-name">{this.props.name}</p>
                    <ul className="tags">
                        <li className="tag tag-genre">
                            {this.props.tags ? this.props.tags[0].name : ""}
                        </li>
                    </ul>
                </div>
                <div className="column is-2 result-ratings-cont">
                    <p >track:</p>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        editing={false}
                        renderStarIcon={() => 
                            <span className="rating-space">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                            </span>}
                        value={this.props.demo_rating}
                        starColor={"#FFFF19"}
                                /><br/>
                    
                </div>
                <div className="column is-2">
                    <Link to={'/user/' + this.props.id}>
                        <div className="next-cont">
                            <img src="img/arrow-right.png" alt="view profile"/>
                        </div>
                    </Link>
                </div>
            </div>
                <Wavesurfer
                audioFile={this.props.audio.url ? this.props.audio.url : 'audio/audio.wav'}
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
                }}/>
            <div className="pause-play-cont" onClick={() => this.setState({playing: !this.state.playing})}>
                <i className={this.state.playing ? " fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
            </div>
        </div>
    }
}

export default Artist


// <p>collaborations:</p>
//     <StarRatingComponent 
//     name="rate2" 
//     starCount={5}
//     editing={false}
//     renderStarIcon={() => 
//         <span className="rating-space">
//             <i className="fa fa-circle" aria-hidden="true"></i>
//         </span>}
//     value={4.5}
//     starColor={"#FFFF19"}
//     />