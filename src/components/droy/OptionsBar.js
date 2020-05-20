import React, { Component } from 'react'
import '../../styles/optionsBar.css'
import { SketchPicker } from 'react-color'

class OptionsBar extends Component {

  constructor() {
    super()
    this.state = {
      showOptions: false,
      color: '',
      showColorPicker: false
    }
  }

  handleAcceptChangeColor = () => {
    this.props.changeColor(this.state.color.hex)
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showOptions = () => {
    this.setState({
      showOptions: !this.state.showOptions
    })
  }

  toggleColorPicker = () => {
    this.setState({
      showColorPicker: !this.state.showColorPicker
    })
  }

  handleChangeColor = (color) => {
    this.setState({
      color: color
    })
  }

  uploadHandler = () => {
    this.refs.imageUploader.click();
  }

  render() {
    const { showOptions, color, showColorPicker } = this.state
    const { changeColor, addLink, changeBackgroundImage } = this.props
    return (
      <div className='container-options-bar'>
        <button className='buttons-optionBar' >
          <img className='image-optionBar' onClick={this.showOptions} src="../../img/edit-icon.png" alt='edit'></img>
        </button>
        <div className="options-bar">
          {showOptions &&
            <div>
              <img className='image-optionBar' data-action='down' src="/img/down-icon.png" alt='down' onClick={this.handleMoveComponent}/>
              <img className='image-optionBar' data-action='up' src="/img/up-icon.png" alt='up' onClick={this.handleMoveComponent}/>
              <img className='image-optionBar' onClick={this.handleDelete} src="/img/deleteBar-icon.png" alt='delete'></img>
              {addLink && <img alt="newLink" onClick={addLink} className='image-optionBar' src="/img/up-icon.png"/> }
              {changeColor && <img onClick={this.toggleColorPicker} alt="newLink" className='image-optionBar' src="/img/up-icon.png"/> }
              {changeBackgroundImage && <img onClick={this.uploadHandler} alt="newLink" className='image-optionBar' src="/img/up-icon.png"/> }
              <input name='image' id='image' style={{ display: 'none' }} onChange={changeBackgroundImage} ref="imageUploader" type="file"/>

            </div>
          }
        </div>
        { showColorPicker && <div className='colorPicker'>
          <SketchPicker disableAlpha={true} onCancel={this.toggleColorPicker} onChange={ this.handleChangeColor } color={color} onChangeComplete={this.handleAcceptChangeColor}/> 
        </div> }
      </div>
    )
  }
}

export default OptionsBar
