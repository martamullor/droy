import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'


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
    const userApiInfo = [
      {
        code: 'ClassicHeading1',
        info: { text1: 'Default hello', text2: 'default world' }
      },
      {
        code: 'ClassicHome1',
        info: { text1: 'aaaa', text2: 'bbbbb' }
      }
    ]
    copyUserLayoutObjToContext(userApiInfo)
    this.setState({ userLayoutObj: userApiInfo })
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

  addComponent = (componentCode) => {
    // añade componente
    const { stateCopy } = {...this.state}
    stateCopy.userLayoutObj.push({
      code: componentCode,
      // info: 
    })
    // guarda en contexto
    /* this.setState({

    }) */
  }

  usedCompIds = () => {
    const stateCopy = {...this.state}
    let { userLayoutObj } = stateCopy
    return userLayoutObj.map(c=>c.code)
  }

  render () {
    const { mode } = this.props
    console.log('In render did mount builder')
    return (
      <div>
        <NavBar withOptions/>
        <div className="main-builder">
          {mode === "edit" && <ComponentsSelectorBar usedCompIds={this.usedCompIds()}/>}
          <div className="user-web-page">
            {this.showComponents()}
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

export default withData(Builder)
