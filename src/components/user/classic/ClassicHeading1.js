import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const style = {
  backgroundColor: '#1b1b1b',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  position: 'relative'
}

const logoContainer = {
  paddingLeft: '50px',
  width: '100px'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const linksStyle = {
  paddingRight: '15px',
  fontSize: '0.9rem',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white'
}

class ClassicHeading1 extends Component {
  render () {
    const { userStyle, mode, info, contentStyle, children: optionsBar, changeImage, openChangeModal } = this.props
    const copyStyle = Object.assign({}, style, userStyle)
    return (
      <div style={copyStyle}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="logo" src={info.logo.src} changeImage={changeImage}/>
        <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={contentStyle} containerStyle={linksContainer} linksStyle={linksStyle}/>
      </div>
    )
  }
}

ClassicHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  changeImage: PropTypes.func,
  openChangeModal: PropTypes.func
}

export default ClassicHeading1
