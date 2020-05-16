import React, { Component } from 'react'
import PropTypes from 'prop-types'

const homeContainer = {
  backgroundImage: 'url("../../../img/classic-home1.jpg")',
  height: '700px',
  backgroundSize: '100%',
  padding: '8px 40px 8px 40px'
}

const textHomeContainer = {
  textAlign: 'left'
}

const titleHome1 = {
  fontSize: '3rem',
  fontWeight: '400'
}

const textHome1 = {
  fontSize: '1rem',
  fontWeight: '200',
  marginTop: '-25px'
}

class ClassicHome1 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props

    return (

      <div style={homeContainer}>
        {optionsBar}
        <div style={textHomeContainer}>
          <h1 style={titleHome1} data-id="text1" onDoubleClick={changeInfo}>{info.text1}</h1>
          <p style={textHome1} data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
        </div>
      </div>
    )
  }
}

ClassicHome1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHome1
