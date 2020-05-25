import React, { Component } from 'react'
import firebase from '../services/firebase'
import Error from '../components/droy/Error'
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'
import '../styles/login-signup.css'
import Loading from '../components/droy/Loading'
import { notifyError, notifyInfo } from '../services/notifications'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
}

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hashedPassword: "",
      name: "",
      confirmationPassword: "",
      status: STATUS.LOADED,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, hashedPassword, confirmationPassword } = this.state
    const { history } = this.props
    if (hashedPassword !== confirmationPassword || hashedPassword.length < 6) {
      notifyError("Incorrect password or weak password")
      this.setState({ status: STATUS.LOADED })
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, hashedPassword)
      .then(() => {
        return firebase.auth().currentUser.updateProfile({
          photoURL: "https://firebasestorage.googleapis.com/v0/b/droy-prod.appspot.com/o/public%2FdefaultAvatar.png?alt=media&token=dec42397-ff82-42b5-bc30-f6daff12e837",
          displayName: name
        })
      })
      .then(() => {
        notifyInfo(`👋 Nice to meet you, ${firebase.auth().currentUser.displayName}!`)
        history.push('/')
      })
      .catch((e) => {
        notifyError(e.message)
        this.setState({ status: STATUS.LOADED })
      })
    }
  };

  handleSubmitGoogle = async () => {
    const { history } = this.props
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
      notifyInfo(`👋 Nice to meet you, ${firebase.auth().currentUser.displayName}!`)
      history.push("/")
    })
    .catch((e) => {
      notifyError(e.message)
      this.setState({ status: STATUS.LOADED })
    })  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  showContent = () => {
    const { status, errorMessage, email, hashedPassword, name, confirmationPassword } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div className='loading-container'><Loading /></div>
      case STATUS.LOADED:
        return (<div className='login-signup-container'>
          <div className='logo-container'>
          </div>
          <div className='form-title-container'>
            <h1 className='title-login-signup'>Sign Up</h1>
            <p className='error-text padding-error'>{errorMessage}</p>
            <form className='login-form' onSubmit={this.handleSubmit}>
              <input className='input-form'
                placeholder="email"
                type="text"
                required="required"
                name="email"
                value={email}
                id="email"
                onChange={this.handleChange}
              />
              <input className='input-form'
                type="password"
                required="required"
                placeholder="···········"
                name="hashedPassword"
                id="hashedPassword"
                value={hashedPassword}
                onChange={this.handleChange}
              />
              <input className='input-form'
                type="password"
                required="required"
                placeholder="···········"
                name="confirmationPassword"
                id="confirmationPassword"
                value={confirmationPassword}
                onChange={this.handleChange}
              />
              <input className='input-form'
                type="text"
                required="required"
                placeholder="Bob Marley"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
              />
              <div className='button-link-login-signup'>
                <Link className='text-form' to="/login">Already have an account? Log in here!</Link>
                <input className='button-form' type="submit" value="create your account" />
              </div>
            </form>
            <div className='google-container' onClick={this.handleSubmitGoogle} >
              <div>
                <img className='google-image' src="/img/google.png" alt="google" />
              </div>
              <p className='google-text'>Sign up with google</p>
            </div>
          </div>
        </div>)
      default:
        return <Error/>
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.showContent()}
      </div>
    );
  }
}

export default SignUp
