import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinkEditable from '../../droy/LinkEditable'

const twoContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '50px',
  backgroundColor: 'white',
  fontFamily: "'Caladea', serif",
  alignItems: 'center',
  justifyContent: 'center'
}

const container4options = {
  display: 'flex',
  width: '100%'
}

const textContainer = {
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2a2c2a',
  width: '50%',
  margin: '15px 30px 15px 0px',
  backgroundColor: '#eaeaed',
  padding: '50px',
  borderRadius: '5px',
  overflow: 'hidden'
}

const titleSection = {
  margin: '5px 0px',
  color: '#242424',
  textAlign: 'center',
  maxHeight: '70px'
}

const subtitleSection = {
  fontWeight: '700',
  width: '100%',
  overflow: 'hidden',
  color: '#242424',
  maxHeight: '200px'
}

const textSection = {
  fontWeight: '200',
  maxWidth: '100%',
  overflow: 'hidden',
  marginTop: '0px',
  color: '#242424',
  maxHeight: '200px'
}

const linksStyle = {
  padding: '8px',
  width: '100%',
  marginRight: '10px',
  backgroundColor: 'transparent',
  border: '2px solid #2d334d',
  color: '#2d334d',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '3px',
  maxHeight: '70px',
  overflow: 'hidden'
}

class ClassicTwoContainer extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, twoContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={container4options}>
          <div style={textContainer}>
            <div>
              <h2 style={Object.assign({}, subtitleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
              <p style={Object.assign({}, textSection, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
              <LinkEditable contentAttrStyle={info.link1.style} mode={mode} info={info.link1} style={linksStyle} data-id='link1' onDoubleClick={openChangeModal}/>
            </div>
          </div>
          <div style={textContainer}>
            <div>
              <h2 style={Object.assign({}, subtitleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
              <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              <LinkEditable contentAttrStyle={info.link2.style} mode={mode} info={info.link2} style={linksStyle} data-id='link2' onDoubleClick={openChangeModal}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ClassicTwoContainer.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  userStyle: PropTypes.object,
  mode: PropTypes.string,
  openChangeModal: PropTypes.func,
  contentStyle: PropTypes.string
}

export default ClassicTwoContainer
