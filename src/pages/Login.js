import React, { Component } from 'react'
import { withAuth } from '../contexts/authContext';
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'

class Login extends Component {

  constructor(props){
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
        <NavBar/>
        <h1>Login</h1>
        <p>{loginError}</p>
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
          <input type="submit" value="submit" />
          <Link to="/signup">You don't have an account? Register here!</Link>
        </form>
      </div>
    );
  }
}

export default withAuth(Login)