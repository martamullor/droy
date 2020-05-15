import React, { Component } from "react";
import api from "../services/apiClient";
import { withRouter } from "react-router-dom";
import firebase from '../services/firebase'
import apiClient from "../services/apiClient";
import axios from "axios";

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
                handleGoogle={props.handleGoogle}
                handleGoogle={props.handleGoogle}
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
      loginError: "",
      firebaseUser: ""
    };
  }

  componentDidMount = async () => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            user,
            isLoggedIn: true,
            authLoading: false
          })
        } else {
          this.setState({
            user: null,
            isLoggedIn: false,
            authLoading: false
          })
        }
      });
    } catch (error) {
      this.setState({
        user: null,
        isLoggedIn: false,
        authLoading: false
      })
    }
  }

  handleLogin = async ({ email, hashedPassword }) => {
    try {
      const { history } = this.props
      const user = await firebase.auth().signInWithEmailAndPassword(email, hashedPassword)
      this.setState({
        isLoggedIn: true,
        user
      })
      history.push("/")
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        user: null,
        loginError: "Incorrect user or password"
      })
    }
  }

  handleGoogle = async () => {
    try {
      const { history } = this.props
      const provider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase.auth().signInWithPopup(provider)
      const { user } = result
      this.setState({
        isLoggedIn: true,
        user,
      })
      history.push('/')      
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        user: null,
        loginError: "Error on signup"
      })
    }
  }

  handleSignUp = async ({ email, hashedPassword, name, confirmationPassword }) => {
    try {
      // confirmate password matching
      const { history } = this.props
      const user = await firebase.auth().createUserWithEmailAndPassword(email, hashedPassword)
      this.setState({
        isLoggedIn: true,
        user,
      })
      history.push('/')
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        user: null,
        loginError: "Error on signup"
      })
    }
  }

  handleLogout = async () => {
    try {
      const { history } = this.props
      await firebase.auth().signOut()
      this.setState({
        isLoggedIn: false,
        user: null,
      })  
      history.push('/login')
    } catch (error) {
      console.log('Error on logout')      
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
          handleGoogle: this.handleGoogle,
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