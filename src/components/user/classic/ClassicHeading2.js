import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundColor: '#dedede',
  padding: '5px 40px 5px 40px',
  display: 'flex',
  color: '#1a1a1a',
  alignItems: 'center'
}

const logo = {
  width: '10%'
}

const textContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const text = {
  paddingRight: '10px',
  fontSize: '0.9rem'
}

class ClassicHeading2 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        <div>
          <img style={logo} src='/img/logo-grey.png' alt='logo-classic-heading'></img>
        </div>
        <div style={textContainer}>
          <p style={text} data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
          <p style={text} data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
        </div>
      </div>
    )
  }
}

ClassicHeading2.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHeading2
