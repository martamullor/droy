import React, { Component } from 'react'

export default class ModalDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newText: this.props.oldText,
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeInfo = (e) => {
    e.preventDefault()
    const { onClose, code, attributeSelected, saveComponentInfoToContext } = this.props
    const { newText } = this.state
    // Warning, double rendering.
    saveComponentInfoToContext(code, attributeSelected, newText)
    onClose()
  }

  render() {
    const { onClose } = this.props
    const { newText } = this.state
    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>
            <img className='close-modal-image' src="../../img/close-icon.png" alt='delete-project'></img>
          </button>
          <form className='form-create-project' onSubmit={this.changeInfo}>
            <input required="required" className='input-modal' type="text"
              name="newText"
              value={newText}
              onChange={this.handleChange} />
            <button className='button-modal' type='submit'>Update info</button>
          </form>
        </div>
      </div>
    )
  }
}
