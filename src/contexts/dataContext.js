import React, { Component } from 'react'
import PropTypes from 'prop-types'

const DataContext = React.createContext()

// Consumer Wrapper
export const withData = (Comp) => {
  return class WithData extends Component {
    render () {
      return (
        <DataContext.Consumer>
          { (props) => <Comp {...this.props} {...props} /> }
        </DataContext.Consumer>
      )
    }
  }
}

// Provider def
class DataProvider extends Component {

  constructor(props){
    super(props)
    this.state = {
      mode: 'edit',
      userLayoutObj: []
    }
  }

  /* SWITCH MODES */
  switchMode = () => {
    const { mode } = this.state
    this.setState({ mode: mode === 'edit' ? 'view': 'edit' })
  }

  
  copyUserLayoutObjToContext = (u) => {
    this.setState({
      userLayoutObj: u
    })
  }

  deleteComponent = (elementCode) => {
    const stateCopy = {...this.state}
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    let fromIndex = 0; let element
    for (let i = 0; i < newUserLayoutObj.length; i++) {
      const c = newUserLayoutObj[i];
      if(c.code === elementCode) {
        element = c; fromIndex = i; break
      }
    }
    newUserLayoutObj.splice(fromIndex, 1)
    this.setState({ userLayoutObj: newUserLayoutObj })
  }

  moveDownComponent = (elementCode) => {
    const stateCopy = {...this.state}
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    let fromIndex = 0; let element
    for (let i = 0; i < newUserLayoutObj.length; i++) {
      const c = newUserLayoutObj[i];
      if(c.code === elementCode) {
        element = c; fromIndex = i; break
      }
    }
    newUserLayoutObj.splice(fromIndex, 1)
    newUserLayoutObj.splice(fromIndex + 1, 0, element)
    this.setState({ userLayoutObj: newUserLayoutObj })
  }

  saveComponentInfoToContext = (componentCode, componentAttr, attrContent) => {
    const stateCopy = {...this.state}
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    for (const userObject of newUserLayoutObj) {
      if(userObject.code === componentCode) {
        userObject.info[componentAttr] = attrContent
      }
    }
    console.log(44, newUserLayoutObj)
    this.setState({
      userLayoutObj: newUserLayoutObj
    })
  };


  save = () => {
    console.log("Saving info:", this.state.userLayoutObj)
  }


  addComponent = (componentCode, defaultInfo) => {
    const stateCopy = {...this.state}
    stateCopy.userLayoutObj.push({
      code: componentCode,
      info: defaultInfo
    })
    this.setState({
      userLayoutObj: stateCopy.userLayoutObj
    })
  }


  render () {
    const { children } = this.props
    
    return (
      <DataContext.Provider value={{
        saveComponentInfoToContext: this.saveComponentInfoToContext,
        getUserLayoutObj: this.getUserLayoutObj,
        copyUserLayoutObjToContext: this.copyUserLayoutObjToContext,
        switchMode: this.switchMode,
        moveDownComponent: this.moveDownComponent,
        addComponent: this.addComponent,
        deleteComponent: this.deleteComponent,
        save: this.save,
        ...this.state
        
      }}>
        {children}
      </DataContext.Provider>
    )
  }
}

DataProvider.propTypes = {
  children: PropTypes.node
}

export default DataProvider