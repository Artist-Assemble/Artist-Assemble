import React from 'react'
// import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'

class Signup extends React.Component {
    render() {
        return <div>
            <header>
                <HeaderMin/>
            </header>
            <div className="lines">
                <section className="container field-container">
                    <img src="img/close.png" alt="close" className="close"/> 
                    <div className="columns has-text-centered is-mobile">
                        <div className="column is-offset-2 is-8 signup-fields">
                            <div className="field">
                                <label className="label" id="name">name</label>
                                <p className="control">
                                    <input className="input" type="text"/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label" id="email">email</label>
                                <p className="control">
                                    <input className="input" type="text"/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label" id="password">password</label>
                                <p className="control">
                                    <input className="input" type="text"/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label" id="re-password">retype password</label>
                                <p className="control">
                                    <input className="input" type="text"/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">Bio</label>
                                <p className="control">
                                    <textarea className="textarea" placeholder="In one or two sentences, tell others about yourself and your music!"></textarea>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">I'm a..</label>
                                <div className="checkboxes">
                                    <p className="control">
                                    <label className="checkbox">
                                        <input type="checkbox"/>
                                        singer/songwriter
                                    </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                            producer
                                        </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                            mix &amp; or mastering engineer
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <div className="field has-text-centered genre-drop">
                                 <label className="label" id="name">my genre</label>
                                <p className="control">
                                    <span className="select">
                                    <select className="options">
                                        <option>edm</option>
                                        <option>electronic</option>
                                        <option>rap/hip-hop</option>
                                        <option>pop</option>
                                        <option>experimental</option>
                                        <option>ambient</option>
                                        <option>Indie</option>
                                        <option>other</option>
                                    </select>
                                    </span>
                                </p>
                            </div>
                            <a className="signup-next">
                                next <i className="fa fa-step-forward" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Signup