import React, { Component } from 'react'
import PropTypes from 'prop-types'

const timelineContainer = {
  fontFamily: "'Roboto', sans-serif",
  display: 'flex',
  position: 'relative',
  padding: '50px',
  backgroundColor: 'white'
}

const textTimelineContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  color: '#2a2c2a',
  width: '100%'
}

const titleSection = {
  fontWeight: '700',
  maxWidth: '100%',
  color: '#181f32',
  margin: '0px',
  overflow: 'hidden',
  maxHeight: '70px'
}

const textSection1 = {
  color: '#181f32',
  textTransform: 'uppercase',
  overflow: 'hidden',
  maxHeight: '30px'
}

class ModernTimeline extends Component {
  render () {
    const { userStyle, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, timelineContainer, userStyle)}>
        {optionsBar}
        <div style={textTimelineContainer}>
          <h2 style={Object.assign({}, titleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
          <p style={Object.assign({}, textSection1, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</p>
        </div>
        <div style={textTimelineContainer}>
          <h2 style={Object.assign({}, titleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
          <p style={Object.assign({}, textSection1, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
        </div>
        <div style={textTimelineContainer}>
          <h2 style={Object.assign({}, titleSection, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
          <p style={Object.assign({}, textSection1, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
        </div>
        <div style={textTimelineContainer}>
          <h2 style={Object.assign({}, titleSection, info.text4.style)} data-id="text4" onDoubleClick={openChangeModal}>{info.text4.text}</h2>
          <p style={Object.assign({}, textSection1, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</p>
        </div>
      </div>
    )
  }
}

ModernTimeline.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  userStyle: PropTypes.object,
  openChangeModal: PropTypes.func
}

export default ModernTimeline
