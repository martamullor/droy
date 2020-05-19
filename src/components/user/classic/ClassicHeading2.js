import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const style = {
  backgroundColor: '#dedede',
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
  color: '#242424'
}

class ClassicHeading2 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, changeImage, openChangeModal } = this.props
    const copyStyle = { ...style }
    Object.assign(copyStyle, userStyle)
    return (
      <div style={copyStyle}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="logo" src={info.logo.src} changeImage={changeImage}/>
        <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} containerStyle={linksContainer} linksStyle={linksStyle}/>
      </div>
    )
  }
}

ClassicHeading2.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHeading2
