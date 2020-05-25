import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import ModalStartPage from '../components/droy/ModalStartProject'
import ModalDelete from '../components/droy/ModalDelete'
import Error from '../components/droy/Error'
import SquareProject from '../components/droy/SquareProject'
import Loading from '../components/droy/Loading'
import '../styles/homePage.css'
import api from '../services/apiClient'
import firebase from '../services/firebase'
import { notifyError } from '../services/notifications'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
}

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDelete: { show: '', data: '' },
      modalStart: false,
      styles: [],
      allProjects: [],
      status: STATUS.LOADING
    }
  }

  /* Gets all the available styles and the projects of this user and store it to the state*/
  componentDidMount = async () => {
    try {
      const [{ data: styles }, { data: projects }] = await Promise.all([
        api.get('/styles'),
        api.get(`/projects/user/${firebase.auth().currentUser.uid}`)
      ])
      this.setState({
        styles: styles,
        allProjects: projects,
        status: STATUS.LOADED,
      })      
    } catch (error) {
      notifyError("We can retrieve your information... So sorry.")
    }
  }

  /* Opens the delete project modal setting the target to the state */
  showModalDelete = (e) => {
    const { allProjects } = this.state
    let targetProject = e.target.attributes['data-project']
    targetProject = allProjects.find(p => p._id === targetProject.value)
    this.setState({
      modalDelete: {
        show: true,
        data: targetProject
      },
      modalStart: false
    })
  }

  /* Closes the delete project modal and refresh data */
  closeModalDelete = async () => {
    try {
      const { data: projects } = await api.get(`/projects/user/${firebase.auth().currentUser.uid}`)
      this.setState({
        modalDelete: {
          show: false,
          data: ''
        },
        allProjects: projects,
      })
    } catch (error) {
      notifyError("We can't refresh the projects... So sorry.")
    }
  }

  /* Opens the start project modal */
  showModalStart = () => {
    this.setState({
      modalDelete: { show: false, data: '' },
      modalStart: true
    })
  }

  /* Close the start project modal */
  closeModalStart = () => {
    this.setState({
      modalStart: false
    })
  }

  showContent() {
    const { status, styles, modalStart, modalDelete, allProjects } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div className='loading-container'><Loading /></div>
      case STATUS.LOADED:
        return (
          <div>
            <h2 className='title-homePage'>Create a project:</h2>
            <img className='buttons-homePage' onClick={this.showModalStart} src="../../img/sum-icon.png" alt='create-project'/>
            {modalStart && <ModalStartPage styles={styles} onClose={this.closeModalStart} />}
            {modalDelete.show && <ModalDelete onClose={this.closeModalDelete} project={modalDelete.data} />}
            {allProjects.length > 0 &&
              <div>
                <h2 className='title-homePage'>Select the project you want to open:</h2>
                <div className='all-projects-homePage'>
                  {allProjects.map((project, key) => <SquareProject key={key} project={project} showModalDelete={this.showModalDelete} />)}
                </div>
              </div>
            }
          </div>
        )
      default:
        return <Error/>
  }
}

  render() {
    return (
      <div className='homePage-container'>
        <NavBar />
        {this.showContent()}
      </div>
    )

  }
}

export default Homepage
