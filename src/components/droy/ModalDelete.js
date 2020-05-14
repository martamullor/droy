import React, { Component } from 'react'
import api from '../../services/apiClient'

export default class ModalDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDelete = async (e) => {
    e.preventDefault()
    const { project, onClose } = this.props
    const { name } = this.state
    try {
      if( name === project.name) {
        await api.delete(`projects/${project._id}`)
        onClose()
      } else {
        this.setState({
          error: 'Los campos no coinciden'
        })
      }
    } catch (error) {
      this.setState({
        error: error.toString('')
      })
    }
  }


  render() {
    const { onClose, project } = this.props
    const { error } = this.state
    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>
            <img className='close-modal-image' src="../../img/close-icon.png" alt='delete-project'></img>
          </button>
          <p className='text-modal-close'> Type {project.name} to delete your project permanently</p>
          <form className='form-create-project' onSubmit={this.handleDelete}>
            <input required="required" className='input-modal' type="text"
              name="name"
              placeholder=""
              onChange={this.handleChange} />
            <button className='button-modal' type='submit'>Delete</button>
          </form>
          <p className='error-text'>{error}</p>
        </div>
      </div>
    )
  }
}
