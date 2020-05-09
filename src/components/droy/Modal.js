import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const modalContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center'
}

const modalStyle = {
  background: '#28306a',
  boxShadow: '-1px 1px 72px -16px rgba(21,26,61,1)',
  width: '50%',
  color: 'white',
  borderRadius: '20px',
  marginTop: '-150px', 
  padding: '40px'
}

const formCreateProject = {
  display: 'flex',
  flexDirection: 'column',
}

const closeModalButton = {
  backgroundColor: 'transparent',
  float:'right',
  color: 'white',
  border: 'none'
}

const labelModal = {
  fontSize: '1.3rem',
  fontWeight: '500',
  color: '#7b8add',
  padding: '20px 10px',
  textAlign: 'left'
}

const inputModal = {
  backgroundColor: 'transparent',
  padding: '5px 0px 5px 15px',
  border: 'none',
  borderBottom: '1px solid #7b8add',
  color: 'white',
  fontSize: '0.8rem'
}

const optionModal = {
  backgroundColor: 'transparent',
  color: 'grey',
  border: '1px solid #7b8add'
}

const buttonModal = {
  fontFamily: 'Montserrat, sans-serif',
  backgroundColor: '#8594e7',
  marginTop: '30px',
  padding: '9px',
  borderRadius: '5px',
  border: 'none',
  color: 'white',
  fontWeight: '600',
  fontSize: '0.9rem',
  width:'100%'
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
      <button style={closeModalButton} onClick={onClose}>X</button>

    
      <form style={formCreateProject} onSubmit={this.handleSubmit}>
        <label style={labelModal} htmlFor="name">Name of the project</label>
        <input style={inputModal} type="text"
          id='name'
          value={name}
          name="name"
          placeholder="name"
          onChange={this.handleChange} />
        <label style={labelModal} htmlFor="theme">Theme of the project</label>
        <select style={optionModal}  id='theme' value={theme} name='theme' onChange={this.handleChange}>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
        </select>
        <Link to="/builder">
          <button style={buttonModal} type='submit'>Create project</button>
        </Link>
      </form>
    </div>)

    if (!isOpen) {
      modal = null
    }
    return (
      <div style={modalContainer}>
        {modal}
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
