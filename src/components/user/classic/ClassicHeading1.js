import React, { Component } from 'react'
import PropTypes, { object } from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'
import LinkEditable from '../../droy/LinkEditable'

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

const textContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const text = {
  paddingRight: '15px',
  fontSize: '0.9rem'
}

class ClassicHeading1 extends Component {


  showLinks = () => {
    const { mode, info, openChangeModal, deleteLink } = this.props
    const allLinks = []
    let i = 1
    for (const key in info) {
      if(info[key].type !== 'link') continue
      allLinks.push(<LinkEditable deleteLink={deleteLink} key={i} mode={mode} info={info[key]} style={text} data-id={key} onDoubleClick={openChangeModal}/>)
      i += 1      
    }
    return allLinks
  }


  render () {
    const { mode, info, openChangeModal, children: optionsBar, changeImage } = this.props
    return (
      <div style={style}>
        {optionsBar}
        <ImageEditable style={logoContainer} data-id="logo" src={info.logo.src} changeImage={changeImage}/>
        <div style={textContainer}>
          {this.showLinks()}
        </div>
      </div>
    )
  }
}

ClassicHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHeading1
