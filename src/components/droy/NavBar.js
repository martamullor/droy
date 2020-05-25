import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import '../../styles/navBar.css'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../services/firebase'
import api from '../../services/apiClient'
import ModalDeploy from '../droy/ModalDeploy'


class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalDeploy: false
    }
  }

  handleCloseModal = () => {
    this.setState({ modalDeploy: false })
  }

  deployApp = async () => {
    const { projectId } = this.props
    await api.get(`/projects/${projectId}/deploy`)
    this.setState({
      modalDeploy: true
    })
  }

  handleSave = () => {
    const { projectId, save } = this.props
    save(projectId)
  }

  handleLogout = async () => {
    const { history } = this.props
    await firebase.auth().signOut()
    history.push('/login')
  }

  showEditViewButton = () => {
    const { mode, switchMode, userLayoutObj } = this.props
    if (mode === 'view') {
      return <button className='buttons-navBar' onClick={switchMode}>Edit page</button>
    }
    if (!userLayoutObj.length) {
      return <button className='buttons-navBar'>View page</button>
    }
    return <button className='buttons-navBar' onClick={switchMode}>View page</button>
  }

  render() {
    const { withOptions, savingStep, projectId } = this.props
    const { modalDeploy } = this.state
    const { currentUser } = firebase.auth()
    return (
      <div className='nav-bar'>
        {modalDeploy && <ModalDeploy projectId={projectId} onClose={this.handleCloseModal}/>}
        <Link to='/' >
          <img className='logo-navBar' src='/img/logo-green.png' alt='logo-white'></img>
        </Link>
        {withOptions && <div>
          <button className='buttons-navBar' onClick={this.deployApp}>Publish</button>
          <button className='buttons-navBar' onClick={this.handleSave}>{savingStep}</button>
          {this.showEditViewButton()}
        </div>
        }
        {currentUser
          ? <button onClick={this.handleLogout} className='buttons-navBar'>Logout</button>
          : <Link className='buttons-navBar' to="/login">Login</Link>}
        {currentUser && 
          <div className='user-nav'>
          <img src={currentUser.photoURL} alt="user-photo" />
          <p>{currentUser.displayName}</p>
        </div>
        }
      </div>
    )
  }
}

NavBar.propTypes = {
  withOptions: PropTypes.bool,
  mode: PropTypes.string,
  switchMode: PropTypes.func,
  save: PropTypes.func,
}

export default withRouter(withData(NavBar))
