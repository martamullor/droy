import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import Loading from '../components/droy/Loading'
import Error from '../components/droy/Error'
import '../styles/builder.css'


class Builder extends Component {

  componentDidMount = async () => {
    const { match, getProjectInfo } = this.props
    getProjectInfo(match.params.projectId)
  }

  showUserComponents = () => {
    const { userLayoutObj, dataError } = this.props
    if (userLayoutObj.length === 0) return (
      <div className='empty-component-base'>
        <img className='image-emptyBuilder' src='../../img/empty-icon.png' alt='empty-icon'></img>
        <p className='text-noComponents'>Start picking one component from the left!</p>
      </div>)
    if (dataError) return <div>{dataError}</div>
    return userLayoutObj.map((c) => {
      return <UserComponentBase code={c.code} key={c.code} />
    })
  }

  showContent = () => {
    const { mode, status: contextStatus } = this.props
    switch (contextStatus) {
      case "LOADING":
        return <div className='loading-container'><Loading /></div>
      case "LOADED":
        return (
          <div className="main-builder">
            {mode === "edit" && <ComponentsSelectorBar />}
            <div className='components-builder'>
              {this.showUserComponents()}
            </div>
          </div>
        );
      case "ERROR":
        return <div><Error /></div>
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <NavBar withOptions />
        {this.showContent()}
      </div>
    )
  }
}

Builder.propTypes = {
  userLayoutObj: PropTypes.array,
  saveInfoToContext: PropTypes.func
}

export default withData(Builder)
