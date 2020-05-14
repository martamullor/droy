import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import '../../styles/navBar.css'
import { withAuth } from '../../contexts/authContext'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {

  handleSave = () => {
    const { save, match } = this.props
    save(match.params.projectId)
  }

  render () {
    const { withOptions, mode, switchMode, isLoggedIn, handleLogout, savingStep } = this.props
    return (
      <div className='nav-bar'>
        <Link to ='/' >
          <img className='logo-navBar' src='../../../img/logo-green.png' alt='logo-white'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={this.handleSave}>{savingStep}</button>
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

export default withRouter(withAuth(withData(NavBar)))
