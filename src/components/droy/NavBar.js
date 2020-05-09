import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'

const navBar = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 35px',
  backgroundColor: '#dd59da'
}

const logoMenu = {
  width: '9%'
}

const buttonsNavBar = {
  fontFamily: 'Montserrat, sans-serif',
  backgroundColor: '#ef9bfd',
  padding: '8px 30px',
  marginRight: '10px',
  borderRadius: '5px',
  border: 'none',
  color: 'white',
  fontWeight: '600',
  fontSize: '0.8rem'
}

class NavBar extends Component {
  render() {
    const { withOptions, mode, switchMode, save } = this.props
    return (
      <div style={navBar}>
        <img style={logoMenu} src='../../../img/logo-white.png' alt='logo-white'></img>
        {withOptions && <div>
          <button style={buttonsNavBar} onClick={save}>Save</button>
          <button style={buttonsNavBar} onClick={switchMode}>{mode === 'edit' ? 'View page' : 'Edit page'}</button></div>
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
