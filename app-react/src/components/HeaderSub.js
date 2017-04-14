import React from 'react'
import { browserHistory } from 'react-router'


class HeaderSub extends React.Component {

    render() {
        const logout = () => {
            sessionStorage.clear()
            window.user = {}
            browserHistory.push('/')
        }
        
        return <div className="container my-container hdr-sub">
            <div className="columns is-mobile vertical">
                <div className="column is-4">
                    <img src="/img/logo.png" alt="artist assemble logo" className="hdr-img-sub" onClick={()=> browserHistory.push('/')}/>
                </div>
                <div className="column is-2"></div>
                <div className="column is-2" onClick={()=> browserHistory.push('/account')}>
                    <i className="fa fa-user fa-2x user" aria-hidden="true"></i>
                </div>
                <div className="column is-2" onClick={()=> browserHistory.push('/searchartists')}>
                    <p className="search-artists is-hidden-mobile"><i className="fa fa-search" aria-hidden="true"></i> artists</p>
                    <p className="search-artists-mobile is-hidden-tablet"><i className="fa fa-search fa-2x" aria-hidden="true"></i></p>
                </div>
                <div className="column is-2">
                    <a className="button is-small logout" onClick={logout}>logout</a>
                </div>
            </div>
        </div>
    }
}

export default HeaderSub