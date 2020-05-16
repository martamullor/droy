import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/modal-projects.css'
import firebase from '../../services/firebase'

class ModalResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      error: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit = async (e) => {
    const { onClose } = this.props
    try {
      e.preventDefault()
      const { email } = this.state
      await firebase.auth().sendPasswordResetEmail(email)
      onClose();
    } catch (error) {
      this.setState({
        error: "Error on sending mail"
      })
      
    }    
  }

  render() {
    const { email, error } = this.state
    const { onClose } = this.props
    return(
      <div className='modal-container-reset'>
      <div className='modal-style-reset'>
        <button className='close-modal' onClick={onClose}>
          <img className='close-modal-image' src="../../img/close-icon.png" alt='delete-project'></img>
        </button>
        <p className='error-text'>{error}</p>
        <form className='form-create-project' onSubmit={this.handleSubmit}>
          <label className='label-modal' htmlFor="name">Email:</label>
          <input required="required" className='input-modal' type="text"
            id='email'
            value={email}
            name="email"
            placeholder="bob@marley.com"
            onChange={this.handleChange} />
          <button className='button-modal' type='submit'>Reset</button>
        </form>
      </div>
    </div>
    )
  }
}

ModalResetPassword.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalResetPassword
