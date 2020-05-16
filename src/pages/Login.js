import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import ModalResetPassword from '../components/droy/ModalResetPassword'
import { Link } from 'react-router-dom'
import firebase from '../services/firebase'
import '../styles/login-signup.css'

const STATUS = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  LOADED: 'LOADED',
}


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hashedPassword: "",
      status: STATUS.LOADED,
      errorMessage: "",
      resetPasswordModal: false
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { history } = this.props
      const { email, hashedPassword } = this.state;
      this.setState({ status: STATUS.LOADING })
      await firebase.auth().signInWithEmailAndPassword(email, hashedPassword)
      history.push("/")
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
        errorMessage: 'Error on login'
      })
    }
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
    try {
      const { history } = this.props
      const provider = new firebase.auth.GoogleAuthProvider()
      this.setState({ status: STATUS.LOADING })
      await firebase.auth().signInWithPopup(provider)
      history.push("/")
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
        errorMessage: 'Error on login google',
      });
    }
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
        return <div>Loading...</div>
      case STATUS.LOADED:
        return (
         <div className='login-signup-container'>
          <div className='logo-container'>
          </div>
          <div className='form-title-container'>
            <h1 className='title-login-signup'>Login:</h1>
            <p>{errorMessage}</p>
            {resetPasswordModal && <ModalResetPassword onClose={this.closeModalReset}/>}
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
                placeholder="······"
                name="hashedPassword"
                id="hashedPassword"
                value={hashedPassword}
                onChange={this.handleChange}
              />
              <div className='button-link-login-signup'>
                <Link className='text-form' to="/signup">You don't have an account? Register here!</Link>
                <input className='button-form' type="submit" value="Log in" />
              </div>
            </form>
                <button onClick={this.showModalReset}>Reset password </button>
          <img src="/img/google.png" alt="google" onClick={this.handleSubmitGoogle}/>
          </div>
        </div>)
      case STATUS.ERROR:
        return <div>{errorMessage}</div>
      default:
        return <div>Strange error...</div>
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        { this.showContent() }
      </div>
    );
  }
}

export default Login