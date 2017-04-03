import React from 'react'
// import { browserHistory } from 'react-router'
import HeaderHome from './HeaderHome'

class Home extends React.Component {
    render() {
        return <div>
            <header>
                <HeaderHome/>
            </header>
            <div className="sec-gap"></div>
            <div className="lines">
                <section className="sec-top container">
                    <div className="columns has-text-centered">
                        <div className="column is-12">
                            <p className="top-p">find the perfect creators to take your music forward</p>
                        </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column is-8-mobile is-6-tablet is-6-desktop singer-tab has-text-centered">
                            <img src="img/tab-circle.png" alt="tab circle" className="tab-circle"/>
                            <p>Singer<br/>Songwriter</p>
                            <img src="img/arrow-right.png" alt="tab arrow" className="tab-arrow"/>
                        </div>
                        <div className="column"></div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column"></div>
                        <div className="column is-8-mobile is-6-tablet is-6-desktop producer-tab has-text-centered">
                            <img src="img/arrow-left.png" alt="tab arrow" className="tab-arrow"/>
                            <p>producer</p>
                            <img src="img/tab-circle.png" alt="tab circle" className="tab-circle"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Home