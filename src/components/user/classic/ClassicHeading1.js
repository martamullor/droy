import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinksListEditable from '../../droy/LinksListEditable'

const style = {
  backgroundColor: '#383a37',
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
  paddingRight: '15px',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#ededed',
  fontFamily: "'Caladea', serif"
}

class ClassicHeading1 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, changeImage, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, style, userStyle)}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="image1" src={info.image1.src} changeImage={changeImage}/>
        <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle}/>
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
  openChangeModal: PropTypes.func,
  userStyle: PropTypes.object,
  mode: PropTypes.string
}

export default ClassicHeading1
