import React, { Component } from 'react'
import PropTypes from 'prop-types'

const sectionContainer = {
  position: 'relative',
  fontFamily: "'Roboto', sans-serif",
  display: 'flex',
  backgroundColor: 'white'
}

const textSectionContainer = {
  textAlign: 'left',
  overflow: 'hidden',
  color: '#2a2c2a',
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: ' 0px 90px 0px 30px'
}

const titleSection1 = {
  fontWeight: '800',
  maxWidth: '100%',
  overflow: 'hidden',
  fontFamily: "'Roboto Mono', monospace",
  color: '#2d334d'
}

const textSection1 = {
  fontWeight: '200',
  maxWidth: '100%',
  overflow: 'hidden',
  marginTop: '-5px',
  color: '#818594'
}

class ModernTitleAndText extends Component {
  render () {
    const { userStyle, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, sectionContainer, userStyle)}>
        {optionsBar}
        <div style={textSectionContainer}>
          <h1 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <p style={Object.assign({}, textSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
        </div>
      </div>
    )
  }
}

ModernTitleAndText.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ModernTitleAndText