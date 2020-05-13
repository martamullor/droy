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

  handleDelete = async () => {
    const { project, onClose } = this.props
    try {
      await api.delete(`projects/${project._id}`)
      onClose()
    } catch (error) {
      this.setState({
        error: error.toString()
      })
    }
  }

  render () {
    const { onClose, project } = this.props
    const { error } = this.state
    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>
            <img className='close-modal-image' src="../../img/delete-icon.png" alt='delete-project'></img>
          </button>
          <p>Escribe {project.name} si quieres borrar tu proyecto</p>
          <input type="text"/>
          <button onClick={this.handleDelete}>Delete</button>
          <p>{error}</p>
        </div>
      </div>
    )
  }
}
