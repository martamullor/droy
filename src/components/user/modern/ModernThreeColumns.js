import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const containerSection = {
  textAlign: 'left',
  position: 'relative',
  padding: ' 50px',
  backgroundColor: '#fafafa',
  fontFamily: "'Roboto Mono', monospace"
}

const threeColumnsContainer = {
  display: 'flex'
}

const textThreeColumnsContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  color: '#2a2c2a',
  width: '100%',
  padding: ' 0px 30px',
  fontFamily: "'Roboto', sans-serif"
}

const titleSection = {
  margin: '-5px',
  padding: ' 0px 30px',
  color: '#30374d',
  overflow: 'hidden',
  maxHeight: '55px'
}

const subtitleSection = {
  fontWeight: '700',
  maxWidth: '100%',
  color: '#30374d',
  margin: '0px',
  overflow: 'hidden',
  maxHeight: '30px'
}

const textSection = {
  color: '#7d818f',
  overflow: 'hidden',
  maxHeight: '180px'
}

const imageIcon = {
  width: '70px',
  margin: '15px 0px 10px -5px'
}

class ModernThreeColumns extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, containerSection, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</h1>
        <div style={threeColumnsContainer}>
          <div style={ textThreeColumnsContainer }>
            <ImageEditable style={imageIcon} data-id="image1" src={info.image1.src} changeImage={changeImage} />
            <h2 style={Object.assign({}, subtitleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
            <p style={Object.assign({}, textSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</p>
          </div>
          <div style={textThreeColumnsContainer} >
            <ImageEditable style={imageIcon} data-id="image2" src={info.image2.src} changeImage={changeImage} />
            <h2 style={Object.assign({}, subtitleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
            <p style={Object.assign({}, textSection, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
          </div>
          <div style={textThreeColumnsContainer}>
            <ImageEditable style={imageIcon} data-id="image3" src={info.image3.src} changeImage={changeImage} />
            <h2 style={Object.assign({}, subtitleSection, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
            <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

ModernThreeColumns.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  userStyle: PropTypes.object,
  changeImage: PropTypes.func,
  openChangeModal: PropTypes.func
}

export default ModernThreeColumns
