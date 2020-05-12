import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import ModalStartPage from '../components/droy/ModalStartProject'
import '../styles/homePage.css'
import api from '../services/apiClient'
import { withAuth } from '../contexts/authContext'
import { Link } from "react-router-dom";

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
}

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      styles: [],
      allProjects: [],
      status: STATUS.LOADING
    }
  }

  componentDidMount = async () => {
    try {
      const stylesApi = await api.get('/styles')
      const projectsApi = await api.get('/projects')
      this.setState({
        styles: stylesApi.data,
        allProjects: projectsApi.data,
        status: STATUS.LOADED
      })
    } catch (error) {
      this.setState({
        status: STATUS.ERROR
      })
    }
  }

  showModalStartProject = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }


  renderProjects = () => {
    const { allProjects } = this.state;
    return allProjects.map((project, index) => {
      return (
        <Link key={index} to={`builder/${project._id}`}>
          <button className='buttons-homePage' onClick={this.showModal}>
            <img className='image-homePage' src="../../img/projects-icon.png" alt='projects'></img>
            <div >
              {project.name}
            </div>
          </button>
        </Link>
      );
    });
  };



  showContent() {
    const { status, styles } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div> Loading... </div>
      case STATUS.LOADED:
        return (
          <div>
            <h2 className='title-homePage'>Start a new project:</h2>
            <button className='buttons-homePage' onClick={this.showModalStartProject}>
              <img className='image-homePage' src="../../img/sum-icon.png" alt='create-project'></img>
            </button>
            {this.state.showModal && <ModalStartPage styles={styles} onClose={this.closeModal} />}
            <h2 className='title-homePage'>Your projects:</h2>
            {this.renderProjects()}
          </div>
        )
      case STATUS.ERROR:
        return <div> Error </div>

      default:
        break;
    }

  }

  render() {
    return (
      <div>
        <NavBar />
        {this.showContent()}
      </div>
    )

  }
}

export default withAuth(Homepage)
