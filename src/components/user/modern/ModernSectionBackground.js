import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const sectionContainer = {
  position: 'relative',
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center'
}

const contentContainer = {
  display: 'flex',
  margin: ' 0px 10px',
  padding: '20px',
  height: '85%',
  backgroundColor: '#e5f3f8',
  borderRadius: '5px'
}

const imageContainer = {
  width: '60%',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  borderRadius: '5px',
  marginLeft: '15px'
}

const textSectionContainer = {
  textAlign: 'left',
  overflow: 'hidden',
  color: '#2a2c2a',
  width: '40%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: ' 0px 90px 0px 30px'
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

const linksStyle = {
  padding: '8px 55px 8px 55px',
  marginRight: '10px',
  backgroundColor: 'transparent',
  border: '2px solid #008cbe',
  color: '#008cbe',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '3px'
}

class ModernSectionBackground extends Component {
  render () {
    const { userStyle, info, mode, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, sectionContainer, userStyle)}>
        {optionsBar}
        <div style={contentContainer}>
          <div style={textSectionContainer}>
            <h1 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
            <p style={Object.assign({}, textSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
            <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle}/>
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
          </div>
        </div>
      </div>
    )
  }
}

ModernSectionBackground.propTypes = {
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
  changeImage: PropTypes.func,
  openChangeModal: PropTypes.func,
  contentStyle: PropTypes.string
}

export default ModernSectionBackground
