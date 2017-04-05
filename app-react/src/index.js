import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'
import SoundcloudAuth from './components/SoundcloudAuth'
import SearchArtists from './components/SearchArtists'
import ViewProfile from './components/ViewProfile'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="account" component={Account} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="searchartists" component={SearchArtists} />
    <Route path="soundcloudauthenticate" component={SoundcloudAuth} />
    <Route path="viewprofile" component={ViewProfile} />
  </Router>,

  document.getElementById('root')
  
)