import React, { Component } from 'react'
import PropTypes from 'prop-types'

const sectionContainer = {
  position: 'relative',
  fontFamily: "'Caladea', serif",
  display: 'flex',
  backgroundColor: 'white'
}

const textSectionContainer = {
  textAlign: 'left',
  overflow: 'hidden',
  color: '#242424',
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
  color: '#242424'
}

const textSection1 = {
  fontWeight: '200',
  maxWidth: '100%',
  overflow: 'hidden',
  marginTop: '-5px',
  color: '#818594'
}

class ClassicTitleAndText extends Component {
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

ClassicTitleAndText.propTypes = {
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

export default ClassicTitleAndText
