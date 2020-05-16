import React, { Component } from 'react'
import api from '../../services/apiClient'
import firebase from '../../services/firebase'

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
        await api.delete(`/projects/${project._id}`)
        const listRef = firebase.storage().ref(firebase.auth().currentUser.uid)
        const res = listRef.child(project._id)
        res.listAll().then(function(res) {
          res.items.forEach(function(itemRef) {
            itemRef.delete()
          });
        })  
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
            <img className='close-modal-image' src="../../img/delete-icon.png" alt='delete-project'></img>
          </button>
          <p> Escribe {project.name} para borrar tu proyect</p>
          <form className='form-create-project' onSubmit={this.handleDelete}>
            <input required="required" className='input-modal' type="text"
              name="name"
              placeholder=""
              onChange={this.handleChange} />
            <button className='button-modal' type='submit'>Delete</button>
          </form>
          <p>{error}</p>
        </div>
      </div>
    )
  }
}
