import React from 'react'
// import { browserHistory } from 'react-router'

class HeaderMin extends React.Component {
    render() {
        return <div className="container my-container hdr-sub has-text-centered">
            <div className="columns is-mobile">
                <div className="column is-12">
                    <img src="img/logo.png" alt="artist assemble logo" className="hdr-img-min"/>
                </div>
            </div>
        </div>
    }
}

export default HeaderMin