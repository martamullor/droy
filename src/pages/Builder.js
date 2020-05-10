import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import '../styles/builder.css'
import { withAuth } from '../contexts/authContext'


class Builder extends Component {

  componentDidMount = async () => {
    const { match, getProjectInfo } = this.props
    getProjectInfo(match.params.projectId)
  }

  showUserComponents = () => {
    const { userLayoutObj, dataError } = this.props
    if (userLayoutObj.length === 0) return <div>"Hello Droyer!! Start picking one component from the left components bar! :)"</div>
    if(dataError) return <div>{dataError}</div>
    return userLayoutObj.map((c) => {
      return <UserComponentBase code={c.code} key={c.code}/>
    })
  }

  render () {
    const { mode } = this.props
    return (
      <div>
        <NavBar withOptions/>
        <div className="main-builder">
          {mode === "edit" && <ComponentsSelectorBar/>}
          <div>
            {this.showUserComponents()}
          </div>
        </div>
      </div>
    )
  }
}

Builder.propTypes = {
  userLayoutObj: PropTypes.array,
  saveInfoToContext: PropTypes.func
}

export default withAuth(withData(Builder))
