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
import Chat from './components/Chat'
import ViewCollaborations from './components/ViewCollaborations'

window.user = JSON.parse(sessionStorage.getItem('user'));

// Pusher global setup
// window.Pusher.logToConsole = true;
window.pusher = new window.Pusher('14484d3cca04e223ce31', {encrypted: true});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/chat" component={Chat} />
    <Route path="/" component={Home} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/searchartists" component={SearchArtists}/>
    <Route path="/user/:user" component={ViewProfile}/>
    <Route path="/collaboration/:collaboration" component={ViewCollaborations}/>
    <Route path="/soundcloudauthenticate" component={SoundcloudAuth} />
  </Router>,

  document.getElementById('root')
  
)



// <Route path="/viewprofile" component={ViewProfile} />