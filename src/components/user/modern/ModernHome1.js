import React, { Component } from 'react'
import PropTypes from 'prop-types'

const homeContainer = {
  backgroundImage: 'url("/img/modern-home1.jpg")',
  height: '600px',
  backgroundSize: 'cover',
  padding: '8px 40px 8px 40px',
  position: 'relative',
  fontFamily: "'Oswald', sans-serif"
}

const textHomeContainer = {
  textAlign: 'left'
}

const titleHome1 = {
  fontSize: '3rem',
  fontWeight: '400'
}

const textHome1 = {
  fontSize: '1rem',
  fontWeight: '200'
}

class ModernHome1 extends Component {
  render () {
    const { userStyle, mode, info, contentStyle, children: optionsBar, changeImage, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, homeContainer, userStyle)}>
        {optionsBar}
        <div style={textHomeContainer}>
          <h1 style={Object.assign({}, titleHome1, contentStyle.text1)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <p style={Object.assign({}, textHome1, contentStyle.text2)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
        </div>
      </div>
    )
  }
}

ModernHome1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ModernHome1
