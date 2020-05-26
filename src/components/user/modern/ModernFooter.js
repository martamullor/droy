import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinksListEditable from '../../droy/LinksListEditable'

// #2d334d

const footerContainer = {
  position: 'relative',
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: '#252629',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '70px'
}

const containerFooter = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  margin: '0px 30px 0px 30px'
}

const titleFooter1 = {
  fontWeight: '800',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#b4bee6',
  margin: '15px 0px 15px 0px',
  textTransform: 'uppercase'
}

const linksContainer = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}

const linksStyle = {
  backgroundColor: 'transparent',
  padding: '5px 0px',
  border: 'none',
  textAlign: 'left',
  color: 'white',
  fontFamily: "'Roboto', sans-serif"
}

class ModernFooter1 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, footerContainer, userStyle)}>
        {optionsBar}
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h4>
          <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle} />
        </div>
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h4>
          <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle} />
        </div>
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter1, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h4>
          <LinksListEditable mode={mode} openChangeModal={openChangeModal} info={info} contentStyle={info} containerStyle={linksContainer} linksStyle={linksStyle} />
        </div>
      </div>
    )
  }
}

ModernFooter1.propTypes = {
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
  openChangeModal: PropTypes.func,
  contentStyle: PropTypes.string
}

export default ModernFooter1