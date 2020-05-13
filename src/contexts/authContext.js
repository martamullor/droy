import React, { Component } from "react";
import api from "../services/apiClient";
import { withRouter } from "react-router-dom";

export const AuthContext = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(props) => {
            return (
              <Comp
                handleLogin={props.handleLogin}
                user={props.user}
                signUpError={props.signUpError}
                authLoading={props.authLoading}
                loginError={props.loginError}
                handleSignUp={props.handleSignUp}
                isLoggedIn={props.isLoggedIn}
                handleLogout={props.handleLogout}
                {...this.props}
              />
            );
          }}
        </AuthContext.Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      user: null,
      authLoading: true,
      loginError: ""
    };
  }

  componentDidMount = async () => {
    try {
      const { data: user } = await api.get('/auth/whoami')
      this.setState({
        authLoading: false,
        isLoggedIn: true,
        user,
      })
    } catch (error) {
      this.setState({
        authLoading: false,
        isLoggedIn: false,
        user: null,
      })      
    }
  }

  handleLogin = async ({ email, hashedPassword }) => {
    try {
      const { history } = this.props
      const { data: user } = await api.post('/auth/login', { email, hashedPassword })
      this.setState({
        isLoggedIn: true,
        user,
      });
      history.push('/')
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        user: null,
        loginError: error.response.data.errors[0]
      })      
    }
  };


  handleSignUp = async ({ email, hashedPassword, name, confirmationPassword }) => {
    try {
      const { history } = this.props
      if(hashedPassword !== confirmationPassword){
        this.setState({ signUpError: 'Incorrect passwords' })
        return
      } 
      const { data: user } = await api.post('/auth/signup', { email, hashedPassword, name })
      this.setState({
        isLoggedIn: true,
        user,
      });
      history.push('/')
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        user: null,
        signUpError: error.response.data.errors[0]
      })      
    }
  };

  handleLogout = async () => {
    try {
      const { history } = this.props
      await api.get('/auth/logout')
      this.setState({
        isLoggedIn: false,
        user: null,
      })
      history.push('/login')
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { children } = this.props;
    const { isLoggedIn, user, loginError, authLoading, signUpError } = this.state;
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          user,
          authLoading,
          loginError,
          signUpError,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleSignUp: this.handleSignUp
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default withRouter(AuthProvider);