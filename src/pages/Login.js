import React, { Component } from 'react'
import { withAuth } from '../contexts/authContext';
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'
import '../styles/login-signup.css'
import apiClient from '../services/apiClient';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hashedPassword: ""
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, hashedPassword } = this.state;
    const { handleLogin } = this.props;
    handleLogin({ email, hashedPassword });
    this.setState({
      email: "",
      hashedPassword: ""
    });
  };

  handleSubmitGoogle = (e) => {
    const { handleGoogle } = this.props;
    handleGoogle(e);
    this.setState({
      email: "",
      hashedPassword: ""
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, hashedPassword } = this.state
    const { loginError } = this.props
    return (
      <div>
        <NavBar />
        <div className='login-signup-container'>
          <div className='logo-container'>
            <img className='login-logo' src='../../../img/logo-white.png' alt='logo-white'></img>
          </div>
          <div className='form-title-container'>
            <h1 className='title-login-signup'>Login your account:</h1>
            <p>{loginError}</p>
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
            <img src="/img/google.png"  onClick={this.handleSubmitGoogle}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login)