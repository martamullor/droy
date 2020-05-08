import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../droy/UserComponentBase'

class Builder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userLayoutObj: [],
    }
  }

  componentDidMount () {
    // db petition
    const { copyUserLayoutObjToContext } = this.props
    const apiInfo = [
      {
        code: 'ClassicHeading1',
        info: { text1: 'Default hello', text2: 'default world' }
      },
      {
        code: 'ClassicHome1',
        info: { text1: 'aaaa', text2: 'bbbbb' }
      }
    ]
    copyUserLayoutObjToContext(apiInfo)
    this.setState({ userLayoutObj: apiInfo })
  }

  save = () => {
    console.log("Saving info:", this.props.userLayoutObj)
  }

  /* COMPONENTS POSITION */
  moveDownComponent = (elementCode) => {
    const { copyUserLayoutObjToContext } = this.props
    var stateCopy = {...this.state}
    let fromIndex = 0; let element
    for (let i = 0; i < stateCopy.userLayoutObj.length; i++) {
      const c = stateCopy.userLayoutObj[i];
      if(c.code === elementCode){
        element = c; fromIndex = i
        break
      }
    }
    if(!element) return
    stateCopy.userLayoutObj.splice(fromIndex, 1)
    stateCopy.userLayoutObj.splice(fromIndex + 1, 0, element)
    // update context too
    copyUserLayoutObjToContext(stateCopy.userLayoutObj)
    this.setState(stateCopy)
  }

  showComponents = () => {
    const { userLayoutObj } = this.state
    return userLayoutObj.map((c) => {
      return <UserComponentBase
          moveDownComponent={this.moveDownComponent}
          info={c.info}
          code={c.code}
          key={c.code}/>
    })
  }

  render () {
    const { mode, switchMode } = this.props
    return (
      <div>
        <h1>Builder page</h1>
        <button onClick={this.save}>Save</button>
        <button onClick={switchMode}>{ mode }</button>
        <div id="user-web-page">
          User web page
          {this.showComponents()}
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
