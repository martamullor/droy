import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinksListEditable from '../../droy/LinksListEditable'

const timelineContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '50px',
  backgroundColor: 'white',
  fontFamily: "'Roboto Mono', monospace"
}

const container4options = {
  display: 'flex'
}

const textTimelineContainerOne = {
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2a2c2a',
  width: '50%',
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#fff3e5',
  padding: '50px',
  margin: '15px 30px 15px 0px',
  borderRadius: '5px'
}

const textTimelineContainerTwo = {
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2a2c2a',
  width: '50%',
  fontFamily: "'Roboto', sans-serif",
  margin: '15px 30px 15px 0px',
  backgroundColor: '#eaeaed',
  padding: '50px',
  borderRadius: '5px'
}

const titleSection = {
  margin: '5px 0px',
  color: '#30374d',
  textAlign: 'left'
}

const titleSection1 = {
  fontWeight: '700',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#2d334d'
}

const textSection1 = {
  fontWeight: '200',
  maxWidth: '100%',
  overflow: 'hidden',
  marginTop: '0px',
  color: '#818594'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'row',
  maxHeight: '60px',
  maxWidth: '60vw',
  overflow: 'hidden'
}

const linksStyle1 = {
  padding: '8px 55px 8px 55px',
  marginRight: '10px',
  backgroundColor: 'transparent',
  border: '2px solid #ff8b00',
  color: '#ff8b00',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '3px'
}

const linksStyle2 = {
  padding: '8px 55px 8px 55px',
  marginRight: '10px',
  backgroundColor: 'transparent',
  border: '2px solid #2d334d',
  color: '#2d334d',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '3px'
}

class ModernTwoContainer extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, timelineContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={container4options}>
          <div style={textTimelineContainerOne}>
            <div>
              <h2 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
              <p style={Object.assign({}, textSection1, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
              <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle1}/>
            </div>
          </div>
          <div style={textTimelineContainerTwo}>
            <div>
              <h2 style={Object.assign({}, titleSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
              <p style={Object.assign({}, textSection1, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle2}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ModernTwoContainer.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ModernTwoContainer
