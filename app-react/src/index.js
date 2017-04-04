import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="account" component={Account} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
  </Router>,

  document.getElementById('root')
  
)