import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/modal-start-project.css'
import api from '../../services/apiClient'
import { withRouter } from "react-router";

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
    try {
      const createdProject = await api.post('/projects', { name, style: theme })
      history.push(`/builder/${createdProject.data._id}`)      
    } catch (error) {
      this.setState({
        error: error.toString()
      })
    }
  }

  render() {
    const { onClose, styles } = this.props
    const { name, theme, error } = this.state;
    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>X</button>
          <p>{error}</p>
          <form className='form-create-project' onSubmit={this.handleSubmit}>
            <label className='label-modal' htmlFor="name">Name of the project</label>
            <input required="required" className='input-modal' type="text"
              id='name'
              value={name}
              name="name"
              placeholder="name"
              onChange={this.handleChange} />
            <label className='label-modal' htmlFor="theme">Theme of the project</label>
            <select className='option-modal' id='theme' value={theme} name='theme' onChange={this.handleChange}>
              {styles.map((s, k) => <option value={s.code}>{s.name}</option> )}
            </select>
            <button className='button-modal' type='submit'>Create project</button>
          </form>
        </div>
      </div>
    )
  }
}

ModalStartProject.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default withRouter(ModalStartProject)