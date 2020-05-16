import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import '../../styles/navBar.css'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../services/firebase'

class NavBar extends Component {

  handleSave = () => {
    const { projectId, save } = this.props
    save(projectId)
  }

  handleLogout = async () => {
    const { history } = this.props
    await firebase.auth().signOut()
    history.push('/login')
  }

  render () {
    const { withOptions, mode, switchMode, savingStep } = this.props
    return (
      <div className='nav-bar'>
        <Link to ='/' >
          <img className='logo-navBar' src='../../../img/logo-white.png' alt='logo-white'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={this.handleSave}>{savingStep}</button>
          <button className='buttons-navBar' onClick={switchMode}>{mode === 'edit' ? 'View page' : 'Edit page'}</button>
        </div>
        }
        {firebase.auth().currentUser
          ? <button onClick={this.handleLogout} className='buttons-navBar'>Logout</button>
          : <Link className='buttons-navBar' to="/login">Login</Link> }
      </div>
    )
  }
}

NavBar.propTypes = {
  withOptions: PropTypes.bool,
  mode: PropTypes.string,
  switchMode: PropTypes.func,
  save: PropTypes.func,
}

export default withRouter(withData(NavBar))
