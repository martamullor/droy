import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import Modal from '../components/droy/Modal'

const titleHomePage = {
  padding: '40px 0px 10px 50px',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#7b8add'
}

const buttonHomePage = {
  backgroundColor: '#262e66',
  margin: '0px 0px 0px 50px',
  width: '180px',
  height: '180px',
  borderRadius: '15px',
  border:'none',
  boxShadow: '-1px 1px 72px -16px rgba(21,26,61,1)'
}

const imageButton = {
  width: '30%'
}


export default class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  showModal = () => {
    this.setState({
      isOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isOpen:false
    })
  }

  render () {
    return (
      <div>
        <NavBar />
        <h2 style={titleHomePage}>Start a new project:</h2>
        <button style={buttonHomePage} onClick={this.showModal}>
        <img style={imageButton} src="../../img/sum-icon.png" alt='create-project'></img>
        </button>
        <Modal isOpen={this.state.isOpen} onClose={this.closeModal} />
      </div>
    )
  }
}
