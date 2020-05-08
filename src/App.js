import React, { Component } from 'react'
import './App.css'
import './styles/classic.css'
import './styles/modern.css'
import { Route } from 'react-router-dom'
import Homepage from './components/droy/Homepage'
import Builder from './components/droy/Builder'
import DataProvider from './contexts/dataContext'

class App extends Component {
  render () {
    return (
      <DataProvider>
        <div className="App">
          <Route exact path='/' component={Homepage} />
          <Route exact path='/builder' component={Builder} />
        </div>
      </DataProvider>
    )
  }
}

export default App
