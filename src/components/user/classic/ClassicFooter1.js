import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinkEditable from '../../droy/LinkEditable'

const footerContainer = {
  position: 'relative',
  fontFamily: "'Caladea', serif",
  backgroundColor: '#383a37',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '70px'
}

const containerFooter = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  width: '33%',
  margin: '0px 30px 0px 30px'
}

const titleFooter = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#ededed',
  margin: '15px 0px 15px 0px'
}

const linksStyle = {
  backgroundColor: 'transparent',
  padding: '5px 0px',
  border: 'none',
  fontFamily: "'Caladea', serif",
  textAlign: 'left',
  color: '#ededed',
  maxHeight: '20px',
  overflow: 'hidden'
}

class ClassicFooter1 extends Component {
  render () {
    const { userStyle, mode, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, footerContainer, userStyle)}>
        {optionsBar}
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h4>
          <LinkEditable contentAttrStyle={info.link1.style} mode={mode} info={info.link1} style={linksStyle} data-id='link1' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link2.style} mode={mode} info={info.link2} style={linksStyle} data-id='link2' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link3.style} mode={mode} info={info.link3} style={linksStyle} data-id='link3' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link4.style} mode={mode} info={info.link4} style={linksStyle} data-id='link4' onDoubleClick={openChangeModal}/>
        </div>
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h4>
          <LinkEditable contentAttrStyle={info.link5.style} mode={mode} info={info.link5} style={linksStyle} data-id='link5' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link6.style} mode={mode} info={info.link6} style={linksStyle} data-id='link6' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link7.style} mode={mode} info={info.link7} style={linksStyle} data-id='link7' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link8.style} mode={mode} info={info.link8} style={linksStyle} data-id='link8' onDoubleClick={openChangeModal}/>
        </div>
        <div style={containerFooter}>
          <h4 style={Object.assign({}, titleFooter, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h4>
          <LinkEditable contentAttrStyle={info.link9.style} mode={mode} info={info.link9} style={linksStyle} data-id='link9' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link10.style} mode={mode} info={info.link10} style={linksStyle} data-id='link10' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link11.style} mode={mode} info={info.link11} style={linksStyle} data-id='link11' onDoubleClick={openChangeModal}/>
          <LinkEditable contentAttrStyle={info.link12.style} mode={mode} info={info.link12} style={linksStyle} data-id='link12' onDoubleClick={openChangeModal}/>
        </div>
      </div>
    )
  }
}

ClassicFooter1.propTypes = {
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

export default ClassicFooter1
