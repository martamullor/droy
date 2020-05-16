import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
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
      errorMessage: ""
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { history } = this.props
      const { email, hashedPassword } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, hashedPassword)
      this.setState({ status: STATUS.LOADING })
      history.push("/")
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
        errorMessage: 'Error on login'
      })
    }
  };

  handleSubmitGoogle = async (e) => {
    try {
      const { history } = this.props
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
      this.setState({ status: STATUS.LOADING })
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
    const { status, errorMessage, email, hashedPassword } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return (<div className='login-signup-container'>
        <div className='logo-container'>
          <img className='login-logo' src='../../../img/logo-white.png' alt='logo-white'></img>
        </div>
        <div className='form-title-container'>
          <h1 className='title-login-signup'>Login your account:</h1>
          <p>{errorMessage}</p>
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
            <input className='button-form' type="submit" value="submit" />
            <Link className='text-form' to="/signup">You don't have an account? Register here!</Link>
          </form>
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