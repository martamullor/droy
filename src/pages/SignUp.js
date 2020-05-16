import React, { Component } from 'react'
import firebase from '../services/firebase'
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'
import '../styles/login-signup.css'

const STATUS = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
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
      errorMessage: ""
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, hashedPassword, confirmationPassword } = this.state
      const { history } = this.props
      if(hashedPassword !== confirmationPassword || hashedPassword.length < 6){
        this.setState({
          errorMessage: 'Weak password or mismatch',
          status: STATUS.LOADED
        })
      } else {
        await firebase.auth().createUserWithEmailAndPassword(email, hashedPassword)
        this.setState({ status: STATUS.LOADING })
        history.push('/')
      }
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
        errorMessage: 'Error on signup'
      })
    }
  };

  handleSubmitGoogle = async () => {
    try {
      const { history } = this.props
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
      this.setState({ status: STATUS.LOADING })
      history.push("/")
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
        errorMessage: 'Error on signup google',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showContent = () => {
    const { status, errorMessage, email, hashedPassword, name, confirmationPassword } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return (<div className='login-signup-container'>
          <div className='logo-container'>
            <img className='login-logo' src='../../../img/logo-white.png' alt='logo-white'></img>
          </div>
          <div className='form-title-container'>
            <h1 className='title-login-signup'>Sign Up</h1>
            { errorMessage }
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
              <input className='input-form'
                type="password"
                required="required"
                placeholder="······"
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
              <input className='button-form' type="submit" value="submit" />
              <img alt="google" src="/img/google.png"  onClick={this.handleSubmitGoogle}/>
              <Link className='text-form' to="/login">Already have an account? Log in here!</Link>
            </form>
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
        {this.showContent()}
      </div>
    );
  }
}

export default SignUp
