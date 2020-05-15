import React, { Component } from 'react'
import '../../styles/optionsBar.css'

class OptionsBar extends Component {

  constructor() {
    super();
    this.state = {
      showOptions: false
    }
  }

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

  showOptions = () => {
    this.setState({
      showOptions: true
    })
  }

  closeOptions = () => {
    this.setState({
      showOptions: false
    })
  }

  render() {
    const { showOptions } = this.state
    return (
      <div className='container-options-bar'>
        <button className='buttons-optionBar' onClick={this.showOptions}>
          <img className='image-optionBar' src="../../img/edit-icon.png" alt='edit'></img>
        </button>
        <div className="options-bar">
          {showOptions &&
            <div>
              <button className='buttons-optionBar' onClick={this.handleMoveDownComponent}>
                <img className='image-optionBar' src="../../img/down-icon.png" alt='down'></img>
              </button>
              <button className='buttons-optionBar' onClick={this.handleMoveUpComponent}>
                <img className='image-optionBar' src="../../img/up-icon.png" alt='up'></img>
              </button>
              <button className='buttons-optionBar' onClick={this.handleDelete}>
                <img className='image-optionBar' src="../../img/deleteBar-icon.png" alt='delete'></img>
              </button>
              <button className='buttons-optionBar' onClick={this.closeOptions}>
                <img className='image-optionBar' src="../../img/closeBar-icon.png" alt='up'></img>
              </button>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default OptionsBar
