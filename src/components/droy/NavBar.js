import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'

class NavBar extends Component {
  render () {
    const { withOptions, mode, switchMode, save } = this.props
    return (
      <div className="nav-bar">
        <h1>Droy</h1>
        {withOptions && <div>
          <button onClick={save}>Save</button>
          <button onClick={switchMode}>{mode === 'edit' ? 'View page' : 'Edit page'}</button></div>
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
