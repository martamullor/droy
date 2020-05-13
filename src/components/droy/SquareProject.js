import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class SquareProject extends Component {
  render () {
    const { index, project, showModalDelete } = this.props
    return (
      <div index={index}>
        <Link to={`builder/${project._id}`}>
          <button className='buttons-homePage'>
            <img className='image-homePage' src="../../img/projects-icon.png" alt='projects'></img>
            <div >
              {project.name}
            </div>
          </button>
        </Link>
        <img onClick={showModalDelete} data-project={project._id} className='image-homePage' src="../../img/delete-icon.png" alt='create-project'></img>
      </div>
    )
  }
}

SquareProject.propTypes = {
  index: PropTypes.string,
  project: PropTypes.object,
  showModalDelete: PropTypes.func
}
