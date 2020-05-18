import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../services/apiClient'

const DataContext = React.createContext()

// Consumer Wrapper
export const withData = (Comp) => {
  return class WithData extends Component {
    render() {
      return (
        <DataContext.Consumer>
          {(props) => <Comp {...this.props} {...props} />}
        </DataContext.Consumer>
      )
    }
  }
}

// Provider def
class DataProvider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mode: 'edit',
      userLayoutObj: [],
      projectStyle: "",
      projectId: "",
      dataError: "",
      savingStep: 'Save',
    }
  }

  /* SWITCH MODES */
  switchMode = () => {
    const { mode } = this.state
    this.setState({ mode: mode === 'edit' ? 'view' : 'edit' })
  }

  deleteComponent = (elementCode) => {
    const stateCopy = { ...this.state }
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    let fromIndex = 0;
    for (let i = 0; i < newUserLayoutObj.length; i++) {
      const c = newUserLayoutObj[i];
      if (c.code === elementCode) {
        fromIndex = i; break
      }
    }
    newUserLayoutObj.splice(fromIndex, 1)
    this.setState({ userLayoutObj: newUserLayoutObj })
  }

  moveComponent = (elementCode, direction) => {
    const stateCopy = { ...this.state }
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    let fromIndex = 0; let element
    for (let i = 0; i < newUserLayoutObj.length; i++) {
      const c = newUserLayoutObj[i];
      if (c.code === elementCode) {
        element = c; fromIndex = i; break
      }
    }
    newUserLayoutObj.splice(fromIndex, 1)
    if (direction === 'down') newUserLayoutObj.splice(fromIndex + 1, 0, element)
    else if (direction === 'up') newUserLayoutObj.splice(fromIndex - 1, 0, element)
    this.setState({ userLayoutObj: newUserLayoutObj })
  }


  save = async (projectId) => {
    try {
      this.setState({ savingStep: 'Saving...' })
      const { userLayoutObj } = this.state
      await api.put(`/projects/${projectId}`, { componentsConfiguration: userLayoutObj })
      setTimeout(() => {
        this.setState({ savingStep: 'OK' })
        setTimeout(() => { this.setState({ savingStep: 'Save' }) }, 500);
      }, 500);
    } catch (error) {
      alert("Error al guardar.")
    }   
  }

  saveComponentInfoToContext = (componentCode, componentAttr, attrContent) => {
    const stateCopy = {...this.state}
    const { userLayoutObj: newUserLayoutObj } = stateCopy
    const saveTo = newUserLayoutObj.find(userObject => userObject.code === componentCode)
    if(attrContent) saveTo.info[componentAttr] = attrContent
    else delete saveTo.info[componentAttr]
    this.setState({
      userLayoutObj: newUserLayoutObj
    })
  };

  addComponent = (componentCode, defaultInfo, componentType) => {
    const stateCopy = { ...this.state }
    stateCopy.userLayoutObj.push({
      code: componentCode,
      info: defaultInfo,
      componentType: componentType
    })
    this.setState({
      userLayoutObj: stateCopy.userLayoutObj,
    })
  }

  getProjectInfo = async (projectId) => {
    try {
      const { data: { componentsConfiguration, style, _id } } = await api.get(`/projects/${projectId}`)
      this.setState({
        projectId: _id,
        userLayoutObj: componentsConfiguration,
        projectStyle: style,
      })
    } catch (error) {
      this.setState({ dataError: "Unable to get your project data" })
    }
  }

  render () {
    const { children } = this.props

    return (
      <DataContext.Provider value={{
        saveComponentInfoToContext: this.saveComponentInfoToContext,
        getProjectInfo: this.getProjectInfo,
        switchMode: this.switchMode,
        moveComponent: this.moveComponent,
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
