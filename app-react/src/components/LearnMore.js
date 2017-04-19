import React from 'react'
import { browserHistory } from 'react-router'
import HeaderHome from './HeaderHome'

class LearnMore extends React.Component {
    render() {
        return <div>
            <header>
                <HeaderHome/>
            </header>
             <div className="back-cont profile-container" onClick={()=> browserHistory.push('/')}>
                <img src="/img/back-icon.png" className="back-icon" alt="back"/>
            </div>
            <div className="sec-gap"></div>
            <div className="lines">
                <section className="sec-top container">
                    <div className="columns has-text-centered">
                        <div className="column is-12">
                            <p className="top-p">more info (and a video!) coming soon :)</p>
                        </div>
                    </div>
                </section>
                <footer className="container">
                    <div className="columns has-text-centered">
                        <div className="column is-offset-4 is-4">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    }
}

export default LearnMore
