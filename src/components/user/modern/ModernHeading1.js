import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const style = {
  backgroundColor: '#252529',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  position: 'relative',
  fontFamily: "'Roboto', sans-serif",
  border: 'none'
}

const logoContainer = {
  paddingLeft: '30px',
  width: '81px',
  overflow: 'hidden',
  height: '70px'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'row',
  maxHeight: '60px',
  maxWidth: '50vw',
  overflow: 'hidden'
}

const linksStyle = {
  padding: '8px 35px 8px 35px',
  marginRight: '10px',
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '3px'
}

class ModernHeading1 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, changeImage, openChangeModal } = this.props
    const copyStyle = Object.assign({}, style, userStyle)
    return (
      <div style={copyStyle}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="image1" src={info.image1.src} changeImage={changeImage}/>
        <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle}/>
      </div>
    )
  }
}

ModernHeading1.propTypes = {
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

export default ModernHeading1
