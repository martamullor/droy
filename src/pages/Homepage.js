import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import ModalStartPage from '../components/droy/ModalStartProject'
import ModalDelete from '../components/droy/ModalDelete'
import SquareProject from '../components/droy/SquareProject'
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
      modalDelete: { show: '', data: '' },
      modalStart: false,
      styles: [],
      allProjects: [],
      status: STATUS.LOADING
    }
  }

  updateComponents = async () => {
    try {
      const stylesApi = await api.get('/styles')
      const projectsApi = await api.get('/projects')
      this.setState({
        styles: stylesApi.data,
        allProjects: projectsApi.data,
        status: STATUS.LOADED,
      })
    } catch (error) {
      this.setState({
        status: STATUS.ERROR
      })
    }
  }

  componentDidMount = async () => {
    this.updateComponents()
  }

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

  closeModalDelete = () => {
    // Warning: double rendering
    this.updateComponents()
    this.setState({
      modalDelete: { show: false }
    })
  }

  showModalStart = () => {
    this.setState({
      modalDelete: { show: false, data: '' },
      modalStart: true
    })
  }

  closeModalStart = () => {
    this.setState({
      modalStart: false
    })
  }


  renderProjects = () => {
    const { allProjects } = this.state;
    return allProjects.map((project, index) => {
      return (
        // Hacer componente SquareProject
        <div key={index} >
          <Link to={`builder/${project._id}`}>
            <button className='buttons-homePage'>
              <img className='image-homePage' src="../../img/projects-icon.png" alt='projects'></img>
              <div >
                {project.name}
              </div>
            </button>
          </Link>
          <img onClick={this.showModalDelete} data-project={project._id} className='image-homePage' src="../../img/delete-icon.png" alt='create-project'></img>
        </div>
      );
    });
  };


  showContent() {
    const { status, styles, modalStart, modalDelete, allProjects } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div> Loading... </div>
      case STATUS.LOADED:
        return (
          <div>
            <h2 className='title-homePage'>Create a project:</h2>
            <img className='buttons-homePage' onClick={this.showModalStart} src="../../img/sum-icon.png" alt='create-project'></img>
            {modalStart && <ModalStartPage styles={styles} onClose={this.closeModalStart} />}
            {modalDelete.show && <ModalDelete onClose={this.closeModalDelete} project={modalDelete.data} />}
            {allProjects.length > 0 && <h2 className='title-homePage'>Select the project you want to open:</h2>}
            <div className='all-projects-homePage'>
              {allProjects.map((project, key) => <SquareProject key={key} project={project} showModalDelete={this.showModalDelete} />)}
            </div>
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
      <div className='homePage-container'>
        <NavBar />
        {this.showContent()}
      </div>
    )

  }
}

export default withAuth(Homepage)
