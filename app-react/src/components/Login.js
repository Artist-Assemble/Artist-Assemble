import React from 'react'
import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'

class Login extends React.Component {
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
                            <a className="login-go">
                                go <i className="fa fa-play" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Login