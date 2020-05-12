import React, { Component } from 'react'
import '../../styles/optionsBar.css'

class OptionsBar extends Component {

  handleMoveUpComponent = () => {
    const { moveComponent, code } = this.props
    moveComponent(code, 'up')
  }

  handleMoveDownComponent = () => {
    const { moveComponent, code } = this.props
    moveComponent(code, 'down')
  }

  handleDelete = () => {
    const { code, deleteComponent } = this.props
    deleteComponent(code)
  }

  render() {
    return (
      <div className="options-bar">
        <button className='buttons-optionBar' onClick={this.handleDelete}>
          <img className='image-optionBar' src="../../img/delete-icon.png" alt='delete'></img>
        </button>
        <button className='buttons-optionBar' onClick={this.handleMoveDownComponent}>
          <img className='image-optionBar' src="../../img/down-icon.png" alt='down'></img>
        </button>
        <button className='buttons-optionBar' onClick={this.handleMoveUpComponent}>
          <img className='image-optionBar' src="../../img/up-icon.png" alt='up'></img>
        </button>
      </div>
    )
  }
}

export default OptionsBar
