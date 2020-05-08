import React, { Component } from 'react'
import { withData } from '../../../contexts/dataContext'
import PropTypes from 'prop-types'

const style = {
  height: '200px',
  backgroundColor: 'blue'
}

class ClassicHome1 extends Component {
  render () {
    const { changeInfo, info, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        In classic home component
        <p id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
        <p id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
      </div>
    )
  }
}

ClassicHome1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.object
}

export default withData(ClassicHome1)
