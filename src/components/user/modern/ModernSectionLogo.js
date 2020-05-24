import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const logosContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'white',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center'
}

const imageLogosContainer = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  color: '#2a2c2a',
  width: '100%'
}

const imageContainer = {
  width: '80px',
  marginRight: '50px',
  textAlign: 'center',
  alignItems: 'center'
}

const titleSection1 = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden',
  fontFamily: "'Roboto', sans-serif",
  color: '#b7b7b7',
  margin: '20px',
  marginTop: '-10px'
}

class ModernSectionLogo extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, logosContainer, userStyle)}>
        {optionsBar}
        <h2 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
        <div style={imageLogosContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image4" src={info.image4.src} changeImage={changeImage} />
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
          </div>
          <div style={imageContainer}>
            <ImageEditable data-id="image6" src={info.image6.src} changeImage={changeImage} />
          </div>
        </div>
      </div>
    )
  }
}

ModernSectionLogo.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ModernSectionLogo
