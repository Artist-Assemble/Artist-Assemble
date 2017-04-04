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
                            <p>singer<br/>songwriters</p>
                            <img src="img/arrow-right.png" alt="tab arrow" className="tab-arrow"/>
                        </div>
                        <div className="column"></div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column"></div>
                        <div className="column is-8-mobile is-6-tablet is-6-desktop producer-tab has-text-centered">
                            <img src="img/arrow-left.png" alt="tab arrow" className="tab-arrow"/>
                            <p>producers</p>
                            <img src="img/tab-circle.png" alt="tab circle" className="tab-circle"/>
                        </div>
                    </div>
                     <div className="columns is-mobile">
                        <div className="column is-8-mobile is-6-tablet is-6-desktop eng-tab has-text-centered">
                            <img src="img/tab-circle.png" alt="tab circle" className="tab-circle"/>
                            <p>mix &amp; mastering<br/>engineers</p>
                            <img src="img/arrow-right.png" alt="tab arrow" className="tab-arrow"/>
                        </div>
                        <div className="column"></div>
                    </div>
                </section>
                <section className="sec-bottom container">
                    <div className="columns has-text-centered">
                        <div className="column is-offset-2-mobile is-8-mobile is-offset-2-tablet is-8-tablet is-offset-4-desktop is-4-desktop desc-cont">
                            <p className="desc-p">
                            Finally, one unified place for all of the people you need to finish and start music projects with. No more guessing, overlooking, or stressing to find the perfect artist or producer. We set high standards and allow you to easily find the perfect, innovative artist to make your music a reality.
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="container">
                    <div className="columns has-text-centered">
                        <div className="column is-12">
                            <a href="#" alt="learn more" className="learn-more">Learn More</a>
                        </div>
                    </div>
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

export default Home