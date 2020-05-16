import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/modal-projects.css'
import api from '../../services/apiClient'
import { withRouter } from "react-router";
import firebase from '../../services/firebase'

class ModalStartProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      theme: '',
      error: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, theme } = this.state
    const { history } = this.props
    const userUid = firebase.auth().currentUser.uid
    try {
      const createdProject = await api.post(`/projects/user/${userUid}`, { name, style: theme })
      history.push(`/builder/${createdProject.data._id}`)
    } catch (error) {
      this.setState({
        error: error.toString()
      })
    }
  }


  showContentModal = () => {
    const { onClose, styles } = this.props
    const { name, theme, error } = this.state;

    return (
        <div className='modal-container'>
          <div className='modal-style'>
            <button className='close-modal' onClick={onClose}>
              <img className='close-modal-image' src="../../img/close-icon.png" alt='delete-project'></img>
            </button>
            <p>{error}</p>
            <form className='form-create-project' onSubmit={this.handleSubmit}>
              <label className='label-modal' htmlFor="name">Name of the project:</label>
              <input required="required" className='input-modal' type="text"
                id='name'
                value={name}
                name="name"
                placeholder="name"
                onChange={this.handleChange} />
              <label className='label-modal' htmlFor="theme">Choose a theme:</label>
              <select required="required" className='option-modal' id='theme' value={theme} name='theme' onChange={this.handleChange}>
                <option value=""></option>
                {styles.map((s, k) => <option key={k} value={s.code}>{s.name}</option>)}
              </select>
              <button className='button-modal' type='submit'>Create project</button>
            </form>
          </div>
        </div>
    )
  }

  render() {
    return(
      this.showContentModal()
    )
  }
}

ModalStartProject.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default withRouter(ModalStartProject)
