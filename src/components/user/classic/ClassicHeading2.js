import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  height: '200px',
  backgroundColor: 'yellow'
}

class ClassicHeading2 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        In classic heading component
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
