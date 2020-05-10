import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundColor: '#1b1b1b',
  padding: '5px 35px 5px 35px',
  display: 'flex',
  color: 'white'
}

const logo = {
  width: '9%'
}

class ClassicHeading1 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={style}>
        {optionsBar}
        <div>
          <img style={logo} src='../../../img/logo-white.png' alt='logo-classic-heading'></img>
        </div>
        <p data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
        <p data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
      </div>
    )
  }
}

ClassicHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHeading1
