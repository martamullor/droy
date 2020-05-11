import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import '../../styles/navBar.css'
import { withAuth } from '../../contexts/authContext'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    const { withOptions, mode, switchMode, save, isLoggedIn, handleLogout } = this.props
    return (
      <div className='nav-bar'>
        <Link to ='/' >
          <img className='logo-navBar' src='../../../img/logo-white.png' alt='logo-white'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={save}>Save</button>
          <button className='buttons-navBar' onClick={switchMode}>{mode === 'edit' ? 'View page' : 'Edit page'}</button>
        </div>
        }
        {isLoggedIn
          ? <button onClick={handleLogout} className='buttons-navBar'>Logout</button>
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
  isLoggedIn: PropTypes.bool,
  handleLogout: PropTypes.func
}

export default withAuth(withData(NavBar))
