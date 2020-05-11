import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import Modal from '../components/droy/ModalStartProject'
import '../styles/homePage.css'
import api from '../services/apiClient'
import { withAuth } from '../contexts/authContext'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
}

class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      styles: [],
      status: STATUS.LOADING
    }
  }

  componentDidMount = async () => {
    try {
      const stylesApi = await api.get('/styles')
      this.setState({
        styles: stylesApi.data,
        status: STATUS.LOADED
      })
    } catch (error) {
      console.log(error)
      this.setState({
        status: STATUS.ERROR
      })
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

  showContent () {
    const { status, styles } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div> Loading... </div>        
      case STATUS.LOADED:
        return(
          <div>
            <h2 className='title-homePage'>Start a new project:</h2>
            <button className='buttons-homePage' onClick={this.showModal}>
            <img className='image-homePage' src="../../img/sum-icon.png" alt='create-project'></img>
            </button>
            {this.state.showModal && <Modal styles={styles} onClose={this.closeModal}/>}
          </div>
        )
      case STATUS.ERROR:
        return <div> Error </div>        

      default:
        break;
    }

  }

  render () {
    return ( 
      <div>
        <NavBar />
        { this.showContent() }
      </div>
    ) 
    
  }
}

export default withAuth(Homepage)
