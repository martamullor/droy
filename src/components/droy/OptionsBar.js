import React, { Component } from 'react'

class OptionsBar extends Component {

  handleMoveDownComponent = () => {
    const { moveDownComponent, code } = this.props
    moveDownComponent(code)
  }

  render () {
    return (
      <div className="options-bar">
        <button onClick={this.handleMoveDownComponent}>down</button>
      </div>
    )
  }
}

export default OptionsBar
