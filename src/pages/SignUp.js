import React, { Component } from 'react'
import { withAuth } from '../contexts/authContext';
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hashedPassword: "",
      name: "",
      confirmationPassword: ""
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, hashedPassword, name, confirmationPassword } = this.state
    const { handleSignUp } = this.props
    handleSignUp({ email, hashedPassword, name, confirmationPassword });
    this.setState({
      email: "",
      password: "",
      hashedPassword: "",
      confirmationPassword: ""
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, hashedPassword, name, confirmationPassword } = this.state
    const { signUpError } = this.props
    return (
      <div>
        <NavBar/>
        <h1>Sign Up</h1>
        <p>{signUpError}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            type="text"
            required="required"
            name="email"
            value={email}
            id="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            required="required"
            placeholder="······"
            name="hashedPassword"
            id="hashedPassword"
            value={hashedPassword}
            onChange={this.handleChange}
          />
          <input
            type="password"
            required="required"
            placeholder="······"
            name="confirmationPassword"
            id="confirmationPassword"
            value={confirmationPassword}
            onChange={this.handleChange}
          />
          <input
            type="text"
            required="required"
            placeholder="Bob Marley"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
          <Link to="/login">Already have an account? Log in here!</Link>
        </form>
      </div>
    );
  }
}

export default withAuth(SignUp)