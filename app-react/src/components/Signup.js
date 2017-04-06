import React from 'react'
// import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'


class Signup extends React.Component {

    constructor(props) {
    super(props)

    this.postUser=this.postUser.bind(this)

    this.state={
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      bio: '',
      artist: false,
      producer: false,
      engineer: false,
      tag: ''
    //   user: {}
    }
}

 postUser() {
    // console.log(this.state)
    fetch('/api/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            bio: this.state.bio,
            artist: this.state.artist,
            producer: this.state.producer,
            engineer: this.state.engineer,
            tag: this.state.tag
        })
    })
      .then(response => response.json())
    //   .then(response => this.setState({user: response}))
      .then(response => console.log(response))
      .then(()=> browserHistory.push('/soundcloudauthenticate'))
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
                                <label className="label" id="name">name</label>
                                <p className="control">
                                    <input className="input" type="text" onChange={(e)=> this.setState({name: e.target.value})}/>
                                </p>
                            </div>
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
                            <div className="field">
                                <label className="label" id="re-password">retype password</label>
                                <p className="control">
                                    <input className="input" type="password" onChange={(e)=> this.setState({password_confirmation: e.target.value})}/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">Bio</label>
                                <p className="control">
                                    <textarea className="textarea" placeholder="In one or two sentences, tell others about yourself and your music!" onChange={(e)=> this.setState({bio: e.target.value})}></textarea>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">I'm a..</label>
                                <div className="checkboxes">
                                    <p className="control">
                                    <label className="checkbox">
                                        <input type="checkbox" checked={this.state.artist}/>
                                        singer/songwriter
                                    </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" checked={this.state.producer}/>
                                            producer
                                        </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" checked={this.state.engineer}/>
                                            mix &amp; or mastering engineer
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <div className="field has-text-centered genre-drop">
                                 <label className="label" id="name">my genre</label>
                                <p className="control">
                                    <span className="select">
                                    <select className="options" onChange={(e)=> this.setState({tag: e.target.value})}>
                                        <option value="edm" >edm</option>
                                        <option value="electronic">electronic</option>
                                        <option value="rap/hip-hop">rap/hip-hop</option>
                                        <option value="pop">pop</option>
                                        <option value="experimental">experimental</option>
                                        <option value="ambient">ambient</option>
                                        <option value="Indie">Indie</option>
                                        <option value="other">other</option>
                                    </select>
                                    </span>
                                </p>
                            </div>
                            <a className="signup-next" onClick={this.postUser}>
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

/*onClick={()=> browserHistory.push('/soundcloudauthenticate')}*/
/*onClick= {this.setState({artist: true})}*/