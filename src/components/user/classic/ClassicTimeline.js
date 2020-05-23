import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const timelineContainer = {
  fontFamily: "'Caladea', serif",
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

const imageContainer = {
  width: '80px'
}

const titleSection1 = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden'
}

class ClassicTimeline extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, timelineContainer, userStyle)}>
        {optionsBar}
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image4" src={info.image4.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, info.text4.style)} data-id="text4" onDoubleClick={openChangeModal}>{info.text4.text}</h2>
        </div>
      </div>
    )
  }
}

ClassicTimeline.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicTimeline
