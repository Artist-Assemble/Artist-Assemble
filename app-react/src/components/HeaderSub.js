import React from 'react'
import { browserHistory } from 'react-router'

class HeaderSub extends React.Component {
    render() {
        return <div className="container">
            <div className="columns has-text-centered">
                <div className="column is-12">
                    <img src="img/logo.png" alt="artist assemble logo"/>
                </div>
            </div>
        </div>
        
    }
}

export default HeaderSub