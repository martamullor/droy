import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class SquareProject extends Component {
  render () {
    const { project, showModalDelete } = this.props
    return (
      <div className='projects-content'>
        <Link to={`builder/${project._id}`}>
          <img className='image-project-homePage' src="../../img/projects-icon.png" alt='projects'></img>
        </Link>
        <div className='project-info'>
          <p className='title-project-homePage'>{project.name}</p>
          <p className='theme-project-homePage'>{project.style} Style</p>
          <p className='updatedAt-project-homePage'>Updated: {moment(project.updatedAt).format('DD/MM/YYYY, k:m')}</p>
          <p className='createdAt-project-homePage'>Created: {moment(project.createdAt).format('DD/MM/YYYY')}</p>
          <Link to={`builder/${project._id}`}>
            <img className='image-small-homePage' src="../../img/view-icon.png" alt='view-project'></img>
          </Link>
          <img className='image-small-homePage' onClick={showModalDelete} data-project={project._id} src="../../img/delete-icon.png" alt='create-project'></img>
        </div>
      </div>
    )
  }
}

SquareProject.propTypes = {
  index: PropTypes.string,
  project: PropTypes.object,
  showModalDelete: PropTypes.func
}
