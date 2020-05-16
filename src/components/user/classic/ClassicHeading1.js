import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const style = {
  backgroundColor: '#1b1b1b',
  padding: '8px 40px 8px 40px',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '120px'
}

const logo = {
  width: '10%'
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

  render () {
    const { info, changeInfo, children: optionsBar, changeImage } = this.props
    console.log(info.logo)
    return (

      <div style={style}>
        {optionsBar}
        <ImageEditable data-id="logo" src={info.logo} changeImage={changeImage}/>
        <div>
          <img style={logo} src='../../../img/logo-white.png' alt='logo-classic-heading'></img>
        </div>
        <div style={textContainer}>
          <p style={text} data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
          <p style={text} data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
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
