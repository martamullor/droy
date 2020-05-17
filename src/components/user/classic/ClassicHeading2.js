import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const style = {
  backgroundColor: '#dedede',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  position: 'relative'
}

const logoContainer = {
  paddingLeft: '50px',
  width: '100px'
}

const textContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const text = {
  paddingRight: '15px',
  fontSize: '0.9rem',
  color: '#242424'
}

class ClassicHeading2 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar, changeImage } = this.props
    return (
      <div style={style}>
        {optionsBar}
        <div style={logoContainer}>
          <ImageEditable data-id="logo" src={info.logo} changeImage={changeImage} />
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
