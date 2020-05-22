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

const titleTimeline1 = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden'
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
    const { userStyle, info, changeImage, contentStyle, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, timelineContainer, userStyle)}>
        {optionsBar}
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image" src={info.image.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, contentStyle.text9)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, contentStyle.text10)} data-id="text10" onDoubleClick={openChangeModal}>{info.text10.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, contentStyle.text11)} data-id="text11" onDoubleClick={openChangeModal}>{info.text11.text}</h2>
        </div>
        <div style={textTimelineContainer}>
          <div style={imageContainer}>
            <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
          </div>
          <h2 style={Object.assign({}, titleSection1, contentStyle.text12)} data-id="text12" onDoubleClick={openChangeModal}>{info.text12.text}</h2>
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
