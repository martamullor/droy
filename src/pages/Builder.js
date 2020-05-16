import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import '../styles/builder.css'
import { withAuth } from '../contexts/authContext'
import { Spring } from 'react-spring/renderprops'


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
        return <Spring
          from={{ number: 0 }}
          to={{ number: 1 }}>
          {props => <div>{props.number}</div>}
        </Spring>
      case "LOADED":
        return (
          <div className="main-builder">
            {mode === "edit" && <ComponentsSelectorBar />}
            <div>
              {this.showUserComponents()}
            </div>
          </div>
        );
      case "ERROR":
        return <div>Error</div>
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

export default withAuth(withData(Builder))
