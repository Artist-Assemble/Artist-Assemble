import React from 'react'
import { browserHistory } from 'react-router'

class HeaderHome extends React.Component {
    render() {
        return <div className="container">
            <div className="columns is-mobile home-nav">
                <div className="column is-9">
                </div>
                <div className="column">
                    <a className="button login-btn" onClick={() => browserHistory.push('/login')}>login</a>
                </div>
            </div>
            <div className="columns has-text-centered">
                <div className="column is-12">
                    <img src="img/logo.png" alt="artist assemble logo"/>
                </div>
            </div>
            <div className="columns has-text-centered">
                <div className="column is-12">
                    <a href="#" alt="signup" className="signup-btn"  onClick={() => browserHistory.push('/signup')}>sign up</a>
                </div>
            </div>
        </div>
        
    }
}

export default HeaderHome