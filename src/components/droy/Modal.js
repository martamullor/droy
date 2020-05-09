import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const modalStyle = {
  background: 'grey',
  padding: '20px',
  margin: '20px 250px 0px 250px',
  color: 'white',
  borderRadius: '20px',
}

const formCreateProject = {
  display: 'flex',
  flexDirection: 'column'
}

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
    const { isOpen, onClose } = this.props
    const { name, theme } = this.state;

    let modal = (<div style={modalStyle}>
      <button onClick={onClose}>X</button>

      <h1>Create your project</h1>
      <form style={formCreateProject} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name of the project</label>
        <input type="text"
          id='name'
          value={name}
          name="name"
          placeholder="name"
          onChange={this.handleChange} />
        <label htmlFor="theme">Theme of the project</label>
        <select id='theme' value={theme} name='theme' onChange={this.handleChange}>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
        </select>
        <Link to="/builder">
          <button type='submit'>Create project</button>
        </Link>
      </form>
    </div>)

    if (!isOpen) {
      modal = null
    }
    return (
      <div>
        {modal}
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
