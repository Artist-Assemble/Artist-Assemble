import React from 'react'
import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'

class SoundcloudAuth extends React.Component {
    render() {
        return <div>
            <header>
                <HeaderMin/>
            </header>
            <div className="lines">
                <section className="container field-container">
                 <img src="img/close.png" alt="close" className="close" onClick={() => browserHistory.push('/')}/> 
                    <div className="columns has-text-centered is-mobile">
                        <div className="column is-offset-2 is-8 signup-fields">
                            <div className="sca-cont">
                                <p className="sca-note">
                                <span className="orange">NOTE:</span> Artist Assemble needs to authenticate with a SoundCloud account. Please make sure you you have an both an account and track ready to link before continuing. Thanks Pal! almost set up..
                                </p>
                            <a className="sca-link">
                                link soundcloud <i className="fa fa-soundcloud" aria-hidden="true"></i>
                            </a>
                            </div>
                            <div className="">
                            </div>
                            <a className="login-go" onClick={()=> browserHistory.push('/account')}>
                                go <i className="fa fa-play" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default SoundcloudAuth