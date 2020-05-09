import React, { Component } from 'react'
import { withData } from '../../../contexts/dataContext'
import PropTypes from 'prop-types'

const style = {
  height: '200px',
  backgroundColor: 'tomato'
}

class ClassicHeading1 extends Component {
  render () {
    const { changeInfo, info, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        In classic heading component
        <p data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
        <p data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
      </div>
    )
  }
}

ClassicHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.object
}

export default withData(ClassicHeading1)
