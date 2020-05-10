import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import Modal from '../components/droy/ModalStartProject'
import '../styles/homePage.css'


export default class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal:false
    })
  }

  render () {
    return (
      <div>
        <NavBar />
        <h2 className='title-homePage'>Start a new project:</h2>
        <button className='buttons-homePage' onClick={this.showModal}>
        <img className='image-homePage' src="../../img/sum-icon.png" alt='create-project'></img>
        </button>
        {this.state.showModal && <Modal onClose={this.closeModal}/>}
      </div>
    )
  }
}
