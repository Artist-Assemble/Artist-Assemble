import React from 'react'
// import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import HeaderMin from './HeaderMin'
// import Fetch from 'whatwg-fetch'

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
      tag: 'electronic',
      audio: {},
    }
}

 postUser() {

    var data = new FormData()
    data.append('name', this.state.name)
    data.append('email', this.state.email)
    data.append('password', this.state.password)
    data.append('password_confirmation', this.state.password_confirmation)
    data.append('bio', this.state.bio)
    data.append('artist', this.state.artist)
    data.append('producer', this.state.producer)
    data.append('engineer', this.state.engineer)
    data.append('tag', this.state.tag)
    data.append('audio', this.state.audio)

    fetch('/api/users', {
    method: 'POST',
    body: data
    })
      .then(response => response.json())
    //   .then(response => this.setState({user: response}))
    //   .then(response => consogit ple.log(response))
      .then(response => {
          if (response.token) {
              sessionStorage.setItem('user', JSON.stringify(response))
              window.user = JSON.parse(sessionStorage.getItem('user'))
              browserHistory.push('/account')
          }
          else {
              alert('hmmm something seems wrong with your login.')
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
                                <label className="label">Im a..</label>
                                <div className="checkboxes">
                                    <p className="control">
                                    <label className="checkbox">
                                        <input type="checkbox" checked={this.state.artist} onClick={()=> this.setState({artist: true})}/>
                                        singer/songwriter
                                    </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" checked={this.state.producer} onClick={()=> this.setState({producer: true})}/>
                                            producer
                                        </label>
                                    </p>
                                    <p className="control">
                                        <label className="checkbox">
                                            <input type="checkbox" checked={this.state.engineer} onClick={()=> this.setState({engineer: true})}/>
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
                            <div className="field upload-cont">
                                <label className="label">upload track</label>
                                <p className="contol">
                                    <input type="file" className="uploadFile" onChange={(e) => this.setState({audio: e.target.files[0]})}/>
                                </p>
                            </div>
                            <a className="signup-next" onClick={() => this.postUser()}>
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
