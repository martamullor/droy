import React, { Component } from 'react'
import './App.css'
import './styles/classic.css'
import './styles/modern.css'
import PrivateRoute from './components/droy/PrivateRoute'
import OnlyNotLoggedRoute from './components/droy/OnlyNotLoggedRoute'
import Homepage from './pages/Homepage'
import Builder from './pages/Builder'
import NotFound from './pages/NotFound'
import DataProvider from './contexts/dataContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Switch } from 'react-router-dom'
import firebase from './services/firebase'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      authLoading: true
    }
  }

  componentDidMount = async () => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({ authLoading: false })
      });
    } catch (error) {
      console.error('error on login')
    }
  }

  render() {
    const { authLoading } = this.state
    return (
      <div>
        {!authLoading
          ? <DataProvider>
            <div className="App">
              <Switch>
                <PrivateRoute exact path='/' component={Homepage} />
                <OnlyNotLoggedRoute exact path='/login' component={Login} />
                <OnlyNotLoggedRoute exact path='/signup' component={SignUp} />
                <PrivateRoute exact path='/builder/:projectId' component={Builder} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </DataProvider>
          : <div>Loading...</div>
      }
      </div>
    )
  }
}

export default App
