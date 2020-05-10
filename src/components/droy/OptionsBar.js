import React, { Component } from 'react'
import '../../styles/optionsBar.css'

class OptionsBar extends Component {

  handleMoveDownComponent = () => {
    const { moveDownComponent, code } = this.props
    moveDownComponent(code)
  }

  handleDelete = () => {
    const { code, deleteComponent } = this.props
    deleteComponent(code)
  }

  render () {
    return (
      <div className="options-bar">
        <button onClick={this.handleMoveDownComponent}>down</button>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    )
  }
}

export default OptionsBar
