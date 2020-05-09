import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Heading2Style = {
  backgroundColor: '#dedede',
  padding: '5px 35px 5px 35px',
  display: 'flex',
  color: '#1a1a1a'
}

const logoHeading2 = {
  width: '9%'
}

class ClassicHeading2 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={Heading2Style}>
        { optionsBar }
        <div>
          <img style={logoHeading2} src='../../../img/logo-grey.png' alt='logo-classic-heading'></img>
        </div>
        <p data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
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
