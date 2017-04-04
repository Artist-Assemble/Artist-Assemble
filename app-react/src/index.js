import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Home from './components/Home'
import Account from './components/Account'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="account" component={Account} />
  </Router>,

  document.getElementById('root')
  
)