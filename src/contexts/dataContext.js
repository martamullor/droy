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
    this.userLayoutObj = []
    this.state = {
      mode: 'edit'
    }
  }

  /* SWITCH MODES */
  switchMode = () => {
    const { mode } = this.state
    this.setState({ mode: mode === 'edit' ? 'view': 'edit' })
  }

  copyUserLayoutObjToContext = (u) => {
    this.userLayoutObj.length = 0 // clear array
    this.userLayoutObj.push(...u)
  }

  saveComponentInfoToContext = (componentInfo, componentCode) => {
    const { userLayoutObj } = this
    const existingComponent = userLayoutObj.filter(c => c.code === componentCode)
    if(existingComponent.length) Object.assign(existingComponent[0], componentInfo)
    else userLayoutObj.push({ info: componentInfo, code: componentCode })
    this.userLayoutObj = userLayoutObj
  };


  save = () => {
    console.log("Saving info:", this.userLayoutObj)
  }

  render () {
    const { children } = this.props
    const { userLayoutObj } = this
    
    return (
      <DataContext.Provider value={{
        saveComponentInfoToContext: this.saveComponentInfoToContext,
        getUserLayoutObj: this.getUserLayoutObj,
        copyUserLayoutObjToContext: this.copyUserLayoutObjToContext,
        switchMode: this.switchMode,
        userLayoutObj,
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
