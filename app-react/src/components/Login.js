import React from 'react'
import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.loginUser = this.loginUser.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

     loginUser() {
    // console.log(this.state)
    fetch('/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    })
      .then(response => response.json())
      .then(response => {
          if (response.token) {
              sessionStorage.setItem('user', JSON.stringify(response))
              browserHistory.push('/account')
          }
          else {
              alert('Failed to login.')
          }
      })
    }

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
                                    <input className="input" type="text" onChange={(e)=> this.setState({email: e.target.value})}/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label" id="password">password</label>
                                <p className="control">
                                    <input className="input" type="password" onChange={(e)=> this.setState({password: e.target.value})}/>
                                </p>
                            </div>
                            <a className="login-go"  onClick={this.loginUser} >
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

/*{"id":5,"email":"gabe1331@gmail.com","token":"7fGaymBy48zUoDtiAnW92fzZ"}*/