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

  showEditViewButton = () => {
    const { mode, switchMode, userLayoutObj } = this.props
    if (mode === 'view') {
      return <button className='buttons-navBar' onClick={switchMode}>Edit page</button>
    }
    if (!userLayoutObj.length) {
      return <button className='buttons-navBar'>View page</button>
    }
    return <button className='buttons-navBar' onClick={switchMode}>View page</button>
  }

  render() {
    const { withOptions, savingStep } = this.props
    const { currentUser } = firebase.auth()
    return (
      <div className='nav-bar'>
        <Link to='/' >
          <img className='logo-navBar' src='/img/logo-green.png' alt='logo-green'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={this.handleSave}>{savingStep}</button>
          {this.showEditViewButton()}
        </div>
        }
        {currentUser
          ? <button onClick={this.handleLogout} className='buttons-navBar'>Logout</button>
          : <Link className='buttons-navBar' to="/login">Login</Link>}
        {currentUser && 
          <div className='user-nav'>
          <img src={currentUser.photoURL} alt="user" />
          <p>{currentUser.displayName}</p>
        </div>
        }

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
