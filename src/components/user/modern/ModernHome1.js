import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinksListEditable from '../../droy/LinksListEditable'

// ##181f32

const homeContainer = {
  backgroundImage: 'url("/img/modern-home1.jpg")',
  height: '600px',
  backgroundSize: 'cover',
  padding: '8px 40px 8px 40px',
  position: 'relative',
  fontFamily: "'Roboto', sans-serif"
}

const textHomeContainer = {
  textAlign: 'center'
}

const titleHome = {
  fontSize: '3rem',
  overflow: 'hidden',
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: '700',
  padding: '20px 30px',
  color: 'white',
  maxHeight: '240px'
}

const textHome = {
  fontSize: '1rem',
  fontWeight: '800',
  marginTop: '-25px',
  overflow: 'hidden',
  padding: '10px 120px',
  color: 'white',
  maxHeight: '198px'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'column'
}

const linksStyle = {
  padding: '20px 50px 20px 50px',
  backgroundColor: 'rgb(45, 197, 250)',
  border: 'none',
  borderRadius: '5px',
  fontFamily: "'Roboto', sans-serif",
  margin: '10px 280px',
  color: 'white'
}

class ModernHome1 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, homeContainer, userStyle)}>
        {optionsBar}
        <div style={textHomeContainer}>
          <h1 style={Object.assign({}, titleHome, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <p style={Object.assign({}, textHome, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
          <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle}/>
        </div>
      </div>
    )
  }
}

ModernHome1.propTypes = {
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

export default ModernHome1
