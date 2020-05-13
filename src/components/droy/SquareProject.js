import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class SquareProject extends Component {

    renderProjects = () => {
        const { project, showModalDelete } = this.props
        return project.map((project, index) => {
            return (
                <div key={index} >
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
            );
        });
    };


    render() {
        return (
            <div>
                {this.renderProjects()}
            </div>
        )
    }
}