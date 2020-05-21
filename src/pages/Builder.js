import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import Loading from '../components/droy/Loading'
import '../styles/builder.css'


class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  /* Updates data context with the actual project information */
  componentDidMount = async () => {
    const { match, getProjectInfo } = this.props
    await getProjectInfo(match.params.projectId)
    this.setState({ isLoading: false })
  }

  /* Loops over project info in data context to print user components */
  /* If not components found, prints a pretty message */
  showUserComponents = () => {
    const { userLayoutObj, dataError } = this.props
    if (!userLayoutObj.length) return (
      <div className='empty-component-base'>
        <img className='image-emptyBuilder' src='/img/empty-icon.png' alt='empty-icon'/>
        <p className='text-noComponents'>Start picking one component from the left!</p>
      </div>)
    if (dataError) return <div>{dataError}</div>
    return userLayoutObj.map((c) => {
      return <UserComponentBase componentStyle={c.componentStyle} componentOptions={c.componentOptions} code={c.code} key={c.code} />
    })
  }

  render() {
    const { mode } = this.props
    const { isLoading } = this.state
    return (
      <div>
        <NavBar withOptions />
        <div className="main-builder">
            {isLoading && <div className='loading-container'><Loading /></div>}
            {!isLoading && mode === "edit" && <ComponentsSelectorBar />}
            {!isLoading && <div className="components-builder">{this.showUserComponents()}</div>}
        </div>
      </div>
    )
  }
}

Builder.propTypes = {
  userLayoutObj: PropTypes.array,
  saveInfoToContext: PropTypes.func
}

export default withData(Builder)
