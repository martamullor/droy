import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import '../../styles/navBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    const { withOptions, mode, switchMode, save } = this.props
    return (
      <div className='nav-bar'>
        <Link to ='/' >
          <img className='logo-navBar' src='../../../img/logo-white.png' alt='logo-white'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={save}>Save</button>
          <button className='buttons-navBar' onClick={switchMode}>{mode === 'edit' ? 'View page' : 'Edit page'}</button></div>
        }
      </div>
    )
  }
}

NavBar.propTypes = {
  withOptions: PropTypes.bool,
  mode: PropTypes.string,
  switchMode: PropTypes.func,
  save: PropTypes.func
}

export default withData(NavBar)
