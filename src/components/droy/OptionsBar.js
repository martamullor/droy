import React, { Component } from 'react'
import '../../styles/optionsBar.css'

class OptionsBar extends Component {

  constructor() {
    super()
    this.state = {
      showOptions: false
    }
  }

  handleMoveComponent = (e) => {
    const { moveComponent, code } = this.props
    const { value: action } = e.target.attributes['data-action']
    moveComponent(code, action)
  }

  handleDelete = () => {
    const { code, deleteComponent } = this.props
    deleteComponent(code)
  }

  showOptions = () => {
    this.setState({
      showOptions: !this.state.showOptions
    })
  }

  closeOptions = () => {
    this.setState({
      showOptions: false
    })
  }

  render() {
    const { showOptions } = this.state
    const { componentType, addLink, code} = this.props
    return (
      <div className='container-options-bar'>
        <button className='buttons-optionBar' >
          <img className='image-optionBar' onClick={this.showOptions} src="../../img/edit-icon.png" alt='edit'></img>
        </button>
        <div className="options-bar">
          {showOptions &&
            <div>
              <img className='image-optionBar' data-action='down' src="../../img/down-icon.png" alt='down' onClick={this.handleMoveComponent}/>
              <img className='image-optionBar' data-action='up' src="../../img/up-icon.png" alt='up' onClick={this.handleMoveComponent}/>
              <img className='image-optionBar' onClick={this.handleDelete} src="../../img/deleteBar-icon.png" alt='delete'></img>
              <img className='image-optionBar' onClick={this.closeOptions} src="../../img/closeBar-icon.png" alt='up'></img>
              {componentType === "nav" && <img alt="newLink" data-id={code} onClick={addLink} className='image-optionBar' src="../../img/up-icon.png"/>}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default OptionsBar
