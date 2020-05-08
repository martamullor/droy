import React, { Component } from 'react'

class OptionsBar extends Component {

  handleMoveDownComponent = () => {
    const { moveDownComponent, code } = this.props
    moveDownComponent(code)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleMoveDownComponent}>down</button>
        <button>up</button>
      </div>
    )
  }
}

export default OptionsBar
