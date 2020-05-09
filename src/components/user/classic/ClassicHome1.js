import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  height: '200px',
  backgroundColor: 'blue'
}

class ClassicHome1 extends Component {
  render () {
    const { info, changeInfo, children: optionsBar } = this.props

    return (

      <div style={style}>
        { optionsBar }
        In classic home component
        <p data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
        <p data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
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
