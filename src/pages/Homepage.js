import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import Modal from '../components/droy/Modal'

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
        <button onClick={this.showModal}>Start a new project</button>
        <Modal isOpen={this.state.isOpen} onClose={this.closeModal} />
      </div>
    )
  }
}
