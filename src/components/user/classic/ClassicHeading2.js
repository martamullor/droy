import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const style = {
  backgroundColor: '#97a68f',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
}

const logoContainer = {
  paddingLeft: '50px',
  width: '90px',
  overflow: 'hidden',
  height: '78px'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'row',
  maxHeight: '60px',
  maxWidth: '50vw',
  overflow: 'hidden'
}

const linksStyle = {
  padding: '8px 30px',
  backgroundColor: 'transparent',
  color: '#242424',
  fontFamily: "'Caladea', serif",
  border: '1px solid #242424',
  borderRadius: '5px'
}

class ClassicHeading2 extends Component {
  render () {
    const { userStyle, mode, info, contentStyle, children: optionsBar, changeImage, openChangeModal } = this.props
    const copyStyle = Object.assign({}, style, userStyle)
    return (
      <div style={copyStyle}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="image1" src={info.image1.src} changeImage={changeImage}/>
        <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={contentStyle} containerStyle={linksContainer} linksStyle={linksStyle}/>
      </div>
    )
  }
}

ClassicHeading2.propTypes = {
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

export default ClassicHeading2
