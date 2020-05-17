import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const style = {
  backgroundColor: '#a40000',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  position: 'relative',
  fontFamily: "'Oswald', sans-serif"
}

const logoContainer = {
  paddingLeft: '30px',
  width: '100px'
}

const textContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const text = {
  paddingRight: '15px',
  fontSize: '0.9rem',
  color: 'white'
}

class ModernHeading1 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar, changeImage } = this.props
    return (
      <div style={style}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="logo" src={info.logo} changeImage={changeImage} />
        <div style={textContainer}>
          <p style={text} data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
          <p style={text} data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
        </div>
      </div>
    )
  }
}

ModernHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ModernHeading1
