import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import Error from '../components/droy/Error'
import Loading from '../components/droy/Loading'
import ModalResetPassword from '../components/droy/ModalResetPassword'
import firebase from '../services/firebase'
import '../styles/login-signup.css'
import { notifyError, notifyInfo } from '../services/notifications'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hashedPassword: "",
      status: STATUS.LOADED,
      resetPasswordModal: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = this.props
    const { email, hashedPassword } = this.state;
    this.setState({ status: STATUS.LOADING })
    firebase.auth().signInWithEmailAndPassword(email, hashedPassword)
    .then(() => {
      notifyInfo(`👋 Welcome, ${firebase.auth().currentUser.displayName}!`)
      history.push("/")
    })
    .catch((e) => {
      notifyError(e.message)
      this.setState({ status: STATUS.LOADED })
    })
  };

  showModalReset = () => {
    this.setState({
      resetPasswordModal: true
    })
  }

  closeModalReset = () => {
    this.setState({
      resetPasswordModal: false
    })
  }

  handleSubmitGoogle = async (e) => {
    const { history } = this.props
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
      notifyInfo(`👋 Welcome, ${firebase.auth().currentUser.displayName}!`)
      history.push("/")
    })
    .catch((e) => {
      notifyError(e.message)
      this.setState({ status: STATUS.LOADED })
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showContent = () => {
    const { status, errorMessage, email, hashedPassword, resetPasswordModal } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div className='loading-container'><Loading /></div>
      case STATUS.LOADED:
        return (
          <div className='login-signup-container'>
            <div className='logo-container'>
            </div>
            <div className='form-title-container'>
              <h1 className='title-login-signup'>Login</h1>
              <p className='error-text padding-error'>{errorMessage}</p>
              {resetPasswordModal && <ModalResetPassword onClose={this.closeModalReset} />}
              <form className='login-form' onSubmit={this.handleSubmit}>
              <label className='label-login-signup'> Your email address
                <input className='input-form'
                  placeholder="email"
                  type="text"
                  required="required"
                  name="email"
                  value={email}
                  id="email"
                  onChange={this.handleChange}
                />
                </label>
                <label className='label-login-signup'> Your password
                <input className='input-form'
                  type="password"
                  required="required"
                  placeholder="············"
                  name="hashedPassword"
                  id="hashedPassword"
                  value={hashedPassword}
                  onChange={this.handleChange}
                />
                </label>
                <div className='button-link-login-signup'>
                  <div className='link-login-container'>
                    <p className='text-form'  onClick={this.showModalReset}>Forgot your password?</p>
                  </div>
                  <input className='button-form' type="submit" value="Log in" />
                </div>
              </form>
              <div className='google-container' onClick={this.handleSubmitGoogle} >
                <div>
                  <img className='google-image' src="/img/google.png" alt="google" />
                </div>
                <p className='google-text'>Login with google</p>
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

export default Login