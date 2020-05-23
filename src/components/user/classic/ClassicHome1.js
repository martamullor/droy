import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinksListEditable from '../../droy/LinksListEditable'

const homeContainer = {
  backgroundImage: 'url("/img/classic-home1.jpg")',
  height: '600px',
  backgroundSize: 'cover',
  padding: '30px 40px 8px 80px',
  position: 'relative',
  fontFamily: "'Caladea', serif"
}

const textHomeContainer = {
  textAlign: 'left',
  overflow: 'hidden',
  color: '#2a2c2a'
}

const titleHome1 = {
  fontWeight: '400',
  maxWidth: '50vw',
  overflow: 'hidden'
}

const textHome1 = {
  fontSize: '1rem',
  fontWeight: '200',
  marginTop: '-35px',
  padding: '0px 55% 0px 0px',
  maxWidth: '80vw',
  overflow: 'hidden'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '500px',
  maxWidth: '15vw',
  overflow: 'hidden',
  marginTop: '15px'
}

const linksStyle = {
  fontSize: '0.9rem',
  backgroundColor: '#2a2c2a',
  padding: '10px 5px',
  border: 'none',
  color: '#ededed',
  fontFamily: "'Caladea', serif",
  marginBottom: '10px',
  borderRadius: '5px'
}

class ClassicHome1 extends Component {
  render () {
    const { userStyle, mode, info, contentStyle, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, homeContainer, userStyle)}>
        {optionsBar}
        <div style={textHomeContainer}>
          <h1 style={Object.assign({}, titleHome1, contentStyle.text1)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <p style={Object.assign({}, textHome1, contentStyle.text2)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
          <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={contentStyle} containerStyle={linksContainer} linksStyle={linksStyle}/>
        </div>
      </div>
    )
  }
}

ClassicHome1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHome1
