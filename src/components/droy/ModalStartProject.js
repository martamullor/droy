import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/modal-start-project.css'


export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      theme: 'classic'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    /*
    axios
      .post(" ", this.state)
      .then(response => {
      })
      .catch((error) => {
        this.setState({
          error: error,
        })
      })
     */

    this.setState({
      name: '',
      theme: 'classic'
    });
  }


  render() {
    const { onClose } = this.props
    const { name, theme } = this.state;

    return (
      <div className='modal-container'>
        <div className='modal-style'>
          <button className='close-modal' onClick={onClose}>X</button>
          <form className='form-create-project' onSubmit={this.handleSubmit}>
            <label className='label-modal' htmlFor="name">Name of the project</label>
            <input className='input-modal' type="text"
              id='name'
              value={name}
              name="name"
              placeholder="name"
              onChange={this.handleChange} />
            <label className='label-modal' htmlFor="theme">Theme of the project</label>
            <select className='option-modal' id='theme' value={theme} name='theme' onChange={this.handleChange}>
              <option value="modern">Modern</option>
              <option value="classic">Classic</option>
            </select>
            <Link to="/builder">
              <button className='button-modal' type='submit'>Create project</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
