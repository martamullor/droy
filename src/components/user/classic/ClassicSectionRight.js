import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const sectionContainer = {
  fontFamily: "'Caladea', serif",
  display: 'flex',
  position: 'relative'
}

const imageContainer = {
  width: '50%',
  overflow: 'hidden',
  height: '100%'
}

const textSectionContainer = {
  textAlign: 'left',
  overflow: 'hidden',
  color: '#2a2c2a',
  width: '50%',
  backgroundColor: 'white'
}

const titleSection1 = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden',
  padding: ' 30px 40px 0px 40px'
}

const textSection1 = {
  fontSize: '1rem',
  fontWeight: '200',
  maxWidth: '80vw',
  overflow: 'hidden',
  padding: ' 0px 40px'
}

class ClassicSectionRight extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, sectionContainer, userStyle)}>
        {optionsBar}
        <div style={imageContainer}>
          <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
        </div>
        <div style={textSectionContainer}>
          <h1 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <p style={Object.assign({}, textSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
        </div>
      </div>
    )
  }
}

ClassicSectionRight.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicSectionRight
