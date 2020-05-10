import React, { Component } from 'react'
import './App.css'
import './styles/classic.css'
import './styles/modern.css'
import PrivateRoute from './components/droy/PrivateRoute'
import OnlyNotLoggedRoute from './components/droy/OnlyNotLoggedRoute'
import Homepage from './pages/Homepage'
import Builder from './pages/Builder'
import DataProvider from './contexts/dataContext'
import AuthProvider from './contexts/authContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

class App extends Component {
  render () {
    return (
      <AuthProvider>
        <DataProvider>
          <div className="App">
            <PrivateRoute exact path='/' component={Homepage} />
            <OnlyNotLoggedRoute exact path='/login' component={Login} />
            <OnlyNotLoggedRoute exact path='/signup' component={SignUp} />
            <PrivateRoute exact path='/builder' component={Builder} />
            <PrivateRoute exact path='/builder/:projectId' component={Builder} />
          </div>
        </DataProvider>
      </AuthProvider>
    )
  }
}

export default App
