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
                </section>
            </div>
        </div>
    }
}

export default Home